<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
	protected $seeders = [
	];

	public function run() {
		foreach ($this->seeders as $seedClass) {
			$this->call($seedClass);
		}
	}
}
