<?php

use Illuminate\Database\Seeder;

class ServicesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
/*        factory(\App\Entity\Services::class, 10)->create();*/

        $services = [
            [
                'service' => [
                    "ru"=> "консультация студентов по реализации их инновационных идей и стартап проектов;",
                    "uz"=> "innovatsion g'oyalar va start-up loyihalarni amalga oshirish bo'yicha talabalarga maslahat berish;",
                    "en"=> "advising students on the implementation of their innovative ideas and startup projects;",
                ],
            ],
            [
                'service' => [
                    "ru"=> "конкурсы, хакатоны, воркшопы на базе университета;",
                    "uz"=> "universitet bazasida tanlovlar, hakatonlar, vorkshoplar;",
                    "en"=> "competitions, hackathons, master classes at the University;",
                ],
            ],
            [
                'service' => [
                    "ru"=> "конференции, выставки, круглые столы, семинары и т.д. по организационным, экономическим и правовым вопросам предпринимательства, в том числе с международным участием;",
                    "uz"=> "konferensiyalar, ko'rgazmalar, davra suhbatlari, seminarlar va h. k. tadbirkorlikning tashkiliy, iqtisodiy va huquqiy masalalari, jumladan, xalqaro ishtirokida;",
                    "en"=> "conferences, exhibitions, round tables, seminars, etc. on organizational, economic and legal issues of entrepreneurship, including with international participation;",
                ],
            ],
            [
                'service' => [
                    "ru"=> "программа резидентства инновационного центра;",
                    "uz"=> "innovatsiya markazi rezidentligi dasturi;",
                    "en"=> "resident program of the innovation center;",
                ],
            ],
            [
                'service' => [
                    "ru"=> "предоставление рабочего пространства;",
                    "uz"=> "ish joyi bilan ta'minlash;",
                    "en"=> "providing a workplace;",
                ],
            ],
            [
                'service' => [
                    "ru"=> "программа инкубации / акселерации;",
                    "uz"=> "inkubatsiya / akseleratsiya dasturi;",
                    "en"=> "incubation / acceleration program;",
                ],
            ],
            [
                'service' => [
                    "ru"=> "центр прототипирования (лаборатория);",
                    "uz"=> "prototiplash markazi (laboratoriya);",
                    "en"=> "prototyping center (laboratory);",
                ],
            ],
            [
                'service' => [
                    "ru"=> "содействие развитию научно-исследовательских работ студентов, магистров, докторантов и молодых ученых института;",
                    "uz"=> "talabalar, magistrlar, doktorantlar va yosh olimlarning ilmiy-tadqiqot ishlarini rivojlantirishga ko'maklashish;",
                    "en"=> "assistance in the development of research works of students, undergraduates, doctoral students and young scientists of the University;",
                ],
            ],
            [
                'service' => [
                    "ru"=> "привлечение инвестиции в инновационные исследования и разработки, проекты и программы обучающихся и молодых ученых.",
                    "uz"=> "talabalar va yosh olimlarning innovatsion tadqiqotlari va ishlanmalariga, loyiha va dasturlariga investitsiyalarni jalb qilish.",
                    "en"=> "attracting investment in innovative research and development, projects and programs of students and young scientists.",
                ],
            ],


        ];

        foreach ($services as $service) {
            \App\Entity\Services::create($service);
        }
    }
}
