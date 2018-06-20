<?php

namespace App\Http\Controllers;

use Auth;
use GAuth;
use Gmf\Sys\Builder;
use Gmf\Sys\Http\Controllers\Controller;
use Gmf\Sys\Models as SysModels;
use Illuminate\Http\Request;
use Log;

class HomeController extends Controller
{
  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct()
  {
    //$this->middleware('visitor');
  }
  public function home(Request $request)
  {
    $isWx = false;
    if ($ua = $request->userAgent()) {
      $isWx = strpos(strtolower($ua), 'micromessenger') > 0;
    }
    if (empty($isWx)) {
      return '请在微信端打开';
    }
    if (!GAuth::id()) {
      return redirect('/wx/login');
    }
    $config = new Builder;
    return view('gmf::app');
  }
  public function getConfigs(Request $request)
  {
    $userId = GAuth::id();
    Log::error('HomeController:' . GAuth::id() . '--' . Auth::id());
    $config = new Builder;
    $config->user(GAuth::user());
    $entId = $request->session()->get(config('gmf.ent.session'));
    if (!empty($entId)) {
      $entId = SysModels\EntUser::where('user_id', $userId)->where('ent_id', $entId)->value('ent_id');
    }
    if (empty($entId)) {
      $entId = SysModels\EntUser::where('user_id', $userId)->orderBy('is_default', 'desc')->value('ent_id');
    }
    $ent = SysModels\Ent::find($entId);
    if ($ent) {
      $config->ent($ent);
      session([config('gmf.ent.session') => $ent->id]);
    }
    if ($ent) {
      try {
        $app = SysModels\App\App::where('openid', 'suite.cbo')->first();
        $entToken = app('Gmf\Sys\Bp\AppConfig')->config([
          'appId' => $app->id,
          'userId' => GAuth::id(),
          'entId' => $ent->id,
          'token' => $ent->token,
        ]);
        if (empty($entToken['host'])) {
          $entToken['host'] = $request->getSchemeAndHttpHost();
        }
        $config->entToken($entToken);
      } catch (\Exceptiond $e) {
        Log::error($e->getMessage());
      }
    }

    return $this->toJson($config);
  }

}
