<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug');
            $table->string('thumbnail')->nullable();
            $table->timestamps();
        });

        Schema::create('event_translations', function (Blueprint $table) {
            // required field
            $table->id();
            $table->string('locale')->index();

            // Foreign key to the main model
            $table->unsignedBigInteger('event_id');
            $table->unique(['event_id','locale']);
            $table->foreign('event_id')->references('id')->on('events')->onDelete('cascade');

            //fields for translation
            $table->longText('content');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('event_translations');
        Schema::dropIfExists('events');
    }
}
