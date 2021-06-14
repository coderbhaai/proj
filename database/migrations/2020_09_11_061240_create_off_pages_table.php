<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOffPagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('off_pages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('client');
            $table->string('url');
            $table->string('keyword');
            $table->string('date');
            $table->string('type');
            $table->string('amount');
            $table->mediumText('text');
            $table->string('status');
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
        Schema::dropIfExists('off_pages');
    }
}
