<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

//微信相关接口
Route::prefix('wx')->group(function () {
	Route::get('js-sign-package', 'WXController@getSignPackage');
  Route::get('mp', 'WXController@mpCheck'); 
  Route::post('mp', 'WXController@mpHandle');
  Route::get('login', 'WXController@wxLogin');
  Route::get('callback', 'WXController@wxCallback');
});

Route::get('/', ['uses' => 'HomeController@home']);
Route::get('/site/configs', ['uses' => 'HomeController@getConfigs']);


Route::get('/{page?}', ['uses' => 'HomeController@home'])->where('page', '^(m|app|auth)\/.*$');