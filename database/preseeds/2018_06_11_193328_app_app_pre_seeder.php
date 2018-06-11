<?php

use Gmf\Sys\Models\App\App;
use Illuminate\Database\Seeder;

/**
 * 在数据库结构创建或者修改成功后，执行此逻辑，需要支持可多次重复执行.
 *
 */
class AppAppPreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App::BatchImport([
			['openid' => 'suite.cbo', 'code' => 'suite.cbo','name'=>'套件基础数据应用'],
			['openid' => 'suite.amiba', 'code' => 'suite.amiba','name'=>'套件阿米巴应用'],
        ]);
    }
}
