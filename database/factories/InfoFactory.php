<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(\App\Entity\Info::class, function (Faker $faker) {
    return [
        'university' => 'Название ВОУ',
        'about' => [
            "ru"=> "Инкубационный центр (__________)    (__________)  и ООО “ Дирекции технологического парка программных продуктов и информационных технологий” (IT Park) – это площадка для развития  молодежных стартап-проектов (__________), целью которого является создание благоприятных условий для обучения и развитие стартап-проектов в сфере ИКТ в университете, привнесение духа инновационной деятельности,  а также создание молодежью инноваций, которые будут востребованы экономикой и социальной сферой.",
            "uz"=> "(__________) Inkubatsiya markazi, (__________)  va \"Dasturiy mahsulotlar va axborot texnologiyalari texnologik parki direksiyasining\" MCHJ (IT Park) – Bu (__________) yoshlarning start-up loyihalarini rivojlantirish uchun platforma bo'lib, uning maqsadi universitetda AKT sohasida start-up loyihalarni o'qitish va rivojlantirish uchun qulay sharoitlar yaratish, innovatsiyalar ruhini joriy etish, shuningdek, iqtisodiyotda va ijtimoiy sohada talab qilinadigan yoshlarning innovatsiyalarini yaratishdir.",
            "en"=> "The incubation centre (__________) (__________) and LLC “Directorate of the Technological Park of Software Products and Information Technologies” (IT Park) is a platform for the development of youth startup projects (__________) , which aims to create favorable conditions for learning and development of startup projects in the field of ICT at the University, introducing the spirit of innovation, as well as creating youth innovations that will be in demand in the economy and social sphere.",
        ],
        'contact' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, architecto cum deleniti deserunt.',
        'social' => [
            'facebook' => 'https://www.facebook.com',
            'instagram' => 'https://www.instagram.com',
            'telegram' => '',
            'twitter' => '',
            'youtube' => '',
        ]
    ];
});



