<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class CreateHookLogsTable.
 */
class CreateHookLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hook_logs', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('user_id');
            $table->string('hook_url', 1024);
            $table->longText('hook_data');
            $table->longText('hook_result');
            $table->tinyInteger('status')->comment('status code');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('hook_logs');
    }
}
