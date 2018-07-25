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
use GuzzleHttp;
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
  public function testapi()
  {
    $keysArr = array(
      "id" => 8,
      "optionId" => 732,
    );
    $client = new GuzzleHttp\Client([
      'base_uri' => 'http://yungu.cying.com.cn',
      'headers' => ['Accept' => 'application/json', 'Content-Type' => 'application/json'],
      'verify' => false
    ]);
    $res = $client->request('POST', 'common/vote!ipcount.erun');
    $result = (string)$res->getBody();
    $result=json_decode($result);
    if($result->msg){
      throw new \Exception($result->msg);
    }
    
    $res = $client->request('POST', 'common/vote!vote.erun', ['form_params' => $keysArr]);
    $result = (string)$res->getBody();
    $result=json_decode($result);
    
    return json_encode( $result);
  }
  public function getConfigs(Request $request) {
    $userId = GAuth::id();
    Log::error('HomeController:' . GAuth::id() . '--' . Auth::id());
    $config = new Builder;
    $config->user(GAuth::user());
    $entId = $request->session()->get(config('gmf.ent.session'));
    if (!empty($entId)) {
      $entId = SysModels\Ent\EntUser::where('user_id', $userId)->where('ent_id', $entId)->value('ent_id');
    }
    if (empty($entId)) {
      $entId = SysModels\Ent\EntUser::where('user_id', $userId)->orderBy('is_default', 'desc')->value('ent_id');
    }
    $ent = SysModels\Ent\Ent::find($entId);
    if ($ent) {
      $config->ent($ent);
      session([config('gmf.ent.session') => $ent->id]);
    }

    return $this->toJson($config);
  }

}
