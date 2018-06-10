<?php

use Gmf\Sys\Builder;
use Illuminate\Database\Seeder;
use Gmf\Sys\Models\App\App;
/**
* 在数据库结构创建或者修改成功后，先执行preseed逻辑，然后再执行，需要支持可多次重复执行.
*
*/
class AppAppInfosPostSeeder extends Seeder {
	public $entId = '';
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function run() {
		App::BatchImport([
			['code'=>'suite.cbo','name'=>'套件基础数据应用'],
			['code'=>'suite.amiba','name'=>'套件阿米巴应用']
		]);
	}
}
