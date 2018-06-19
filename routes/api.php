<?php

Route::middleware(['api'])->prefix('ents')->group(function () {
	Route::post('auditing', 'EntController@auditing');
});
Route::middleware(['api','auth:api'])->prefix('ents')->group(function () {
	Route::post('join', 'EntController@join');
});