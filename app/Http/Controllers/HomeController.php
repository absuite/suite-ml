<?php

namespace App\Http\Controllers;
use Gmf\Sys\Builder;
use Gmf\Sys\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller {
	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct() {
		//$this->middleware('visitor');
	}
	public function home(Request $request) {
		$config = new Builder;
		
		return view('gmf::app');
	}
	public function getConfigs(Request $request) {
		$config = new Builder;
		$config->userName('用户名');
		$config->userData('欢迎使用gmf!');
		return $this->toJson($config);
	}

}
