<?php

use Illuminate\Database\Seeder;

class NewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('news')->delete();
        DB::table('news_translations')->delete();
        for ($i = 1; $i <= 20; $i++) {
            $faker = Faker\Factory::create();
            factory(\App\Entity\News::class, 1)->create([

                'title:ru'  =>  "News RU $i",
                'slug:ru'  =>  "News_RU_$i",
                'content:ru' => $faker->realText($maxNbChars = 10000, $indexSize = 1)  ,

                'title:uz'  =>  "News UZ $i",
                'slug:uz'  =>  "News_UZ_$i",
                'content:uz' => $faker->realText($maxNbChars = 10000, $indexSize = 2)  ,

                'title:en'  =>  "News EN $i",
                'slug:en'  =>  "News_EN_$i",
                'content:en' => $faker->realText($maxNbChars = 10000, $indexSize = 3)   ,

            ]);
        }
    }
}
