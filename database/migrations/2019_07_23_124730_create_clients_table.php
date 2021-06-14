<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('c_name');
            $table->string('uid');
            $table->string('c_web')->nullable();
            $table->string('c_logo')->nullable();
            $table->string('status')->nullable();
            $table->string('seo')->nullable();
            $table->string('smm')->nullable();
            $table->string('graphics')->nullable();
            $table->string('website')->nullable();
            $table->string('c_country')->nullable();
            $table->string('remarks')->nullable();
            $table->rememberToken();
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
        Schema::dropIfExists('clients');
    }
}
