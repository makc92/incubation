<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStartupApplicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('startup_applications', function (Blueprint $table) {
            $table->id();
            $table->string('fullname')->nullable();
            $table->string('university')->nullable();
            $table->string('course')->nullable();
            $table->string('faculty')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('program')->nullable();
            $table->string('startup')->nullable();
            $table->string('industry')->nullable();
            $table->longText('idea')->nullable();
            $table->string('presentation')->nullable();
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
        Schema::dropIfExists('startup_applications');
    }
}
