<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(\App\Entity\Services::class, function (Faker $faker) {
    return [
        'service' => [
            "ru"=> "RU ". $faker->jobTitle,
            "uz"=> "UZ ". $faker->jobTitle,
            "en"=> "EN ". $faker->jobTitle,
        ],
    ];
});
