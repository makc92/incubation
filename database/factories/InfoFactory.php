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
        'services' => [
            "ru"=> "<ul>
                        <li>консультация студентов по реализации их инновационных идей и стартап проектов;</li>
                        <li>конкурсы, хакатоны, воркшопы на базе университета;
                        </li>
                        <li>конференции, выставки, круглые столы, семинары и т.д. по организационным, экономическим и правовым вопросам предпринимательства, в том числе с международным участием;
                        </li>
                        <li>программа резидентства инновационного центра;
                        </li>
                        <li>предоставление рабочего пространства;
                        </li>
                        <li>программа инкубации / акселерации;
                        </li>
                        <li>центр прототипирования (лаборатория);
                        </li>
                        <li>содействие развитию научно-исследовательских работ студентов, магистров, докторантов и молодых ученых института;</li>
                        <li>привлечение инвестиции в инновационные исследования и разработки, проекты и программы обучающихся и молодых ученых.</li>
                    </ul>",
            "uz"=> " <ul>
                        <li>innovatsion g'oyalar va start-up loyihalarni amalga oshirish bo'yicha talabalarga maslahat berish;
                        </li>
                        <li>universitet bazasida tanlovlar, hakatonlar, vorkshoplar;
                        </li>
                        <li>konferensiyalar, ko'rgazmalar, davra suhbatlari, seminarlar va h. k. tadbirkorlikning tashkiliy, iqtisodiy va huquqiy masalalari, jumladan, xalqaro ishtirokida;
                        </li>
                        <li>innovatsiya markazi rezidentligi dasturi;
                        </li>
                        <li>ish joyi bilan ta'minlash;
                        </li>
                        <li>inkubatsiya / akseleratsiya dasturi;
                        </li>
                        <li>prototiplash markazi (laboratoriya);
                        </li>
                        <li>talabalar, magistrlar, doktorantlar va yosh olimlarning ilmiy-tadqiqot ishlarini rivojlantirishga ko'maklashish;talabalar va yosh olimlarning innovatsion tadqiqotlari va ishlanmalariga, loyiha va dasturlariga investitsiyalarni jalb qilish.
                        </li>
                    </ul>",
            "en"=> " <ul>
                        <li>advising students on the implementation of their innovative ideas and startup projects;
                        </li>
                        <li>competitions, hackathons, master classes at the University;
                        </li>
                        <li>conferences, exhibitions, round tables, seminars, etc. on organizational, economic and legal issues of entrepreneurship, including with international participation;
                        </li>
                        <li>resident program of the innovation center;
                        </li>
                        <li>providing a workplace;
                        </li>
                        <li>incubation / acceleration program;
                        </li>
                        <li>prototyping center (laboratory);
                        </li>
                        <li>assistance in the development of research works of students, undergraduates, doctoral students and young scientists of the University;
                        </li>
                        <li>attracting investment in innovative research and development, projects and programs of students and young scientists.
                        </li>
                    </ul>",
        ],
        'contact' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, architecto cum deleniti deserunt.',
        'social' => [
            'facebook' => 'https://www.facebook.com',
            'instagram' => 'https://www.instagram.com',
        ]
    ];
});



