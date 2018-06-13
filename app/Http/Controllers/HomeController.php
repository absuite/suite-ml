<?php

namespace App\Http\Controllers;

use Gmf\Sys\Builder;
use Gmf\Sys\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Log;
use Gmf\Sys\Models as SysModels;
use GAuth;

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

    $config = new Builder;

    return view('gmf::app');
  }
  public function getConfigs(Request $request)
  {
    $config = new Builder;
    $config->userName('用户名');
    $config->userData('欢迎使用gmf!');

    $ent = SysModels\Ent::where('openid', '01e86d71771c179083591dba0fa408f23')->first();
    if ($ent) {
      $config->ent($ent);
      session([config('gmf.ent.session') => $ent->id]);
    }
    if ($ent) {
      try {
        $entToken = app('Gmf\Sys\Bp\AppConfig')->config(['appId' => 'suite.cbo', 'userId' => GAuth::id(), 'entId' => $ent->id]);
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
