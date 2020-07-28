<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news', function (Blueprint $table) {
            $table->id();
            $table->string('thumbnail')->nullable();
            $table->timestamps();
        });

        Schema::create('news_translations', function (Blueprint $table) {
            // required field
            $table->id();
            $table->string('locale')->index();

            // Foreign key to the main model
            $table->unsignedBigInteger('news_id');
            $table->unique(['news_id','locale']);
            $table->foreign('news_id')->references('id')->on('news')->onDelete('cascade');

            //fields for translation
            $table->string('title');
            $table->string('slug');
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
        Schema::dropIfExists('news_translations');
        Schema::dropIfExists('news');
    }
}
