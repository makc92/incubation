<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(\App\Entity\Event::class, function (Faker $faker) {
    return [
        'thumbnail' => null,
    ];
});
