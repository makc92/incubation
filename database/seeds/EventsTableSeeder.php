<?php

use Illuminate\Database\Seeder;

class EventsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('events')->delete();
        DB::table('event_translations')->delete();
        for ($i = 1; $i <= 10; $i++) {
            $faker = Faker\Factory::create();
            factory(\App\Entity\Event::class, 1)->create([

                'title'  =>  "Event $i",
                'slug'  =>  "Event_$i",

                'content:ru' => $faker->realText($maxNbChars = 10000, $indexSize = 1)  ,

                'content:uz' => $faker->realText($maxNbChars = 10000, $indexSize = 2)  ,

                'content:en' => $faker->realText($maxNbChars = 10000, $indexSize = 3)   ,

            ]);
        }
    }
}
