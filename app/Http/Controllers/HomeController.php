<?php

namespace App\Http\Controllers;

use Auth;
use GAuth;
use Gmf\Sys\Builder;
use Gmf\Sys\Http\Controllers\Controller;
use Gmf\Sys\Models as SysModels;
use Gmf\Sys\Models\User;
use Illuminate\Http\Request;
use Log;

class HomeController extends Controller {
  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct() {
    //$this->middleware('visitor');
  }
  public function demo(Request $request) {
    $user = User::where('type', 'sys')->first();
    Auth::login($user);
    return redirect('/?demo=1');
  }
  public function home(Request $request) {
    $isWx = false;
    if ($ua = $request->userAgent()) {
      $isWx = strpos(strtolower($ua), 'micromessenger') > 0;
    }
    // if (empty($isWx)&&empty($request->input('demo'))) {
    //   return view('not-in-wx');
    // }
    if (!GAuth::id()) {
      return redirect('/wx/login');
    }
    $config = new Builder;
    return view('app', ['jsWX' => $isWx]);
  }
  public function testapi() {
    return json_encode([]);
  }
  public function getConfigs(Request $request) {
    $userId = GAuth::id();
    Log::error('HomeController:' . GAuth::id() . '--' . Auth::id());
    $config = new Builder;
    $config->user(GAuth::user());
    $entId = $request->session()->get(config('gmf.ent.session'));
    if (!empty($entId)) {
      $entId = SysModels\Ent\EntUser::where('user_id', $userId)->where('ent_id', $entId)->where('is_effective', '1')->where('revoked', '0')->value('ent_id');
    }
    if (empty($entId)) {
      $entId = SysModels\Ent\EntUser::where('user_id', $userId)->where('is_effective', '1')->where('revoked', '0')->orderBy('is_default', 'desc')->value('ent_id');
    }
    if (!empty($entId)) {
      $ent = SysModels\Ent\Ent::find($entId);
      if ($ent) {
        $config->ent($ent);
        session([config('gmf.ent.session') => $ent->id]);
      }
    }
    return $this->toJson($config);
  }

}
