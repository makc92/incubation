<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventApplicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('event_applications', function (Blueprint $table) {
            $table->id();
            $table->string('fullname')->nullable();
            $table->string('university')->nullable();
            $table->string('course')->nullable();
            $table->string('faculty')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('event')->nullable();
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
        Schema::dropIfExists('event_applications');
    }
}
