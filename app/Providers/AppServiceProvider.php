<?php

namespace App\Providers;
use DB;
use Illuminate\Support\ServiceProvider;
use Log;

class AppServiceProvider extends ServiceProvider {
	/**
	 * Bootstrap any application services.
	 *
	 * @return void
	 */
	public function boot() {
		if (env('APP_DEBUG') && !$this->app->runningInConsole()) {
			DB::listen(function ($query) {
				$bin = collect($query->bindings)->toJson();
				Log::info($query->time . ' ' . $query->sql . ':' . $bin);
			});
		}
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: GET, POST');
		header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization,VCode, X-Request-With');
		header('Access-Control-Allow-Credentials: true');
	}

	/**
	 * Register any application services.
	 *
	 * @return void
	 */
	public function register() {
		//
	}
}
