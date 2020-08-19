<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect(app()->getLocale());
});

Route::group([
    'prefix' => '{locale}',
    'where' => ['locale' => '[a-zA-Z]{2}'],
    'middleware' => 'localization'], function() {

    Route::get('/', 'MainPageController@index')->name('home');;
    Route::get('/mentor', 'MainPageController@mentorForm')->name('mentor');
    Route::post('/sendMentor', 'MainPageController@mentorFormSend')->name('mentor.send');

    Route::get('/tracker', 'MainPageController@trackerForm')->name('tracker');
    Route::post('/sendTracker', 'MainPageController@trackerFormSend')->name('tracker.send');

    Route::get('/startup', 'MainPageController@startupForm')->name('startup');
    Route::post('/sendStartup', 'MainPageController@startupFormSend')->name('startup.send');

    Route::get('/registerEvent/{event}', 'MainPageController@eventForm')->name('event');
    Route::post('/sendEvent', 'MainPageController@eventFormSend')->name('event.send');



    Route::get('/news/{slug}', 'MainPageController@showNews')->name('news.show');

    Route::get('/event/{slug}', 'MainPageController@showEvent')->name('event.show');


});

Auth::routes();

/*Route::get('/home', function() {
    return view('home');
})->name('home')->middleware('auth');*/

Route::group(
    [
        'prefix' => 'admin',
        'as' => 'admin.',
        'namespace' => 'Admin'
    ],
    function () {
        Route::get('/', 'DashboardController@index')->name('home');
        Route::resource('users', 'UsersController');
        Route::resource('news', 'NewsController');
        Route::resource('event', 'EventsController');
        Route::resource('slider', 'SliderController');
        Route::resource('partner', 'PartnersController');
        Route::resource('startup', 'StartupsController');
        Route::resource('services', 'ServicesController');

        Route::get('startups/export/', 'Applications\StartupController@export')->name('startups.export');
        Route::get('events/export/', 'Applications\EventsController@export')->name('events.export');
        Route::get('mentors/export/', 'Applications\MentorsController@export')->name('mentors.export');
        Route::get('trackers/export/', 'Applications\TrackersController@export')->name('trackers.export');


        Route::resource('startups', 'Applications\StartupController');
        Route::resource('events', 'Applications\EventsController');
        Route::resource('mentors', 'Applications\MentorsController');
        Route::resource('trackers', 'Applications\TrackersController');


        Route::get('/info', 'InfoController@index')->name('info');
        Route::get('/contact', 'InfoController@contact')->name('contact');

        Route::put('/info/{info}', 'InfoController@updateUniversity')->name('info.university');
        Route::put('/contact/{info}', 'InfoController@updateContact')->name('info.contact');

        Route::get('/logo', 'InfoController@showLogo')->name('logo');
        Route::post('/logo/store', 'InfoController@logoUpload')->name('logo.store');
    }
);
