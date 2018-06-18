<?php
//微信相关接口
Route::middleware(['api'])->prefix('wx')->group(function () {
	Route::get('js-sign-package', 'WXController@getSignPackage');
	Route::get('mp', 'WXController@mpCheck');
	Route::post('mp', 'WXController@mpHandle');
});