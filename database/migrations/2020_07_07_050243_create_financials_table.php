<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFinancialsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('financials', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('business');
            $table->string('date');
            $table->string('type');
            $table->string('fromTo');
            $table->string('mode');
            $table->string('amount');
            $table->string('number')->nullable();
            $table->mediumText('purpose');
            $table->mediumText('remarks');
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
        Schema::dropIfExists('financials');
    }
}
