<?php

namespace App\Providers;

use App\Entity\Info;
use Illuminate\Support\ServiceProvider;

class UniversityServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        view()->composer('*', function ($view) {
            $info = Info::first();
            $view->with('university', $info->university);
            $view->with('info', $info);
        });
    }
}
