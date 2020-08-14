<?php

namespace App\Http\Controllers;

use App\Entity\Applications\Mentor;
use App\Entity\Applications\Startup;
use App\Entity\Applications\Tracker;
use App\Entity\Event;
use App\Entity\Info;
use App\Entity\News;
use App\Entity\Partner;
use App\Entity\Services;
use App\Entity\Slider;
use App\Entity\Startup as StartupFront;
use Http;
use Illuminate\Http\Request;

class MainPageController extends Controller
{
    public function index() {
        $info = Info::first();
        $news  = News::orderBy('created_at', 'desc')->get();
        $events  = Event::orderBy('created_at', 'desc')->get();;
        $sliders = Slider::all();
        $partners = Partner::all();
        $startups = StartupFront::all();
        $services = Services::all();
        return view('welcome', compact(['news', 'events','info','sliders','partners','startups','services']));
    }
    public function mentorForm(){
        return view('front.mentor');
    }

    public function mentorFormSend(Request $request){
        $this->validate($request, [
            'fullname' => 'required',
            'company' => 'required',
            'position' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'sphere' => 'required',
            'university' => 'required',
            'graduate' => 'required',
        ]);
        Mentor::create($request->all());
        $response = Http::post('http://itparkdevtestdomain.uz/admin/mentors', [
            'fullname' => $request->input('fullname'),
            'company' => $request->input('company'),
            'position' => $request->input('position'),
            'phone' => $request->input('phone'),
            'email' => $request->input('email'),
            'sphere' => $request->input('sphere'),
            'university' => $request->input('university'),
            'graduate' => $request->input('graduate'),
        ]);
        flash('Спасибо. Заявка отправлена.')->success();
        return redirect()->route('mentor', app()->getLocale());
    }

    public function trackerForm(){
        return view('front.tracker');
    }

    public function trackerFormSend(Request $request){
        $this->validate($request, [
            'fullname' => 'required',
            'company' => 'required',
            'position' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'sphere' => 'required',
            'university' => 'required',
            'graduate' => 'required',
        ]);
        Tracker::create($request->all());
        $response = Http::post('http://itparkdevtestdomain.uz/admin/trackers', [
            'fullname' => $request->input('fullname'),
            'company' => $request->input('company'),
            'position' => $request->input('position'),
            'phone' => $request->input('phone'),
            'email' => $request->input('email'),
            'sphere' => $request->input('sphere'),
            'university' => $request->input('university'),
            'graduate' => $request->input('graduate'),
        ]);
        flash('Спасибо. Заявка отправлена.')->success();
        return redirect()->route('tracker', app()->getLocale());
    }

    public function startupForm(){
        return view('front.startup');
    }

    public function startupFormSend(Request $request){
        $this->validate($request, [
            'fullname' => 'required',
            'university' => 'required',
            'course' => 'required',
            'faculty' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'program' => 'required',
            'startup' => 'required',
            'industry'=> 'required',
            'idea' => 'required',
            'presentation' => 'required|mimes:pdf',
        ]);

        Startup::create($request->all());
        $file = $request->file('presentation');
        $file = file_get_contents($file);

        $response = Http::attach(
            'presentation', $file, 'presentation'
        )->post('http://itparkdevtestdomain.uz/admin/startups', [
            'fullname' => $request->input('fullname'),
            'university' => $request->input('university'),
            'course' => $request->input('course'),
            'faculty' => $request->input('faculty'),
            'phone' => $request->input('phone'),
            'email' => $request->input('email'),
            'program' => $request->input('program'),
            'startup' => $request->input('startup'),
            'industry' => $request->input('industry'),
            'idea' => $request->input('idea'),
        ]);

        flash('Спасибо. Заявка отправлена.')->success();
        return redirect()->route('startup', app()->getLocale());
    }


    public function eventForm($locale,$slug){
        $event = Event::whereSlug($slug)->first();;
        return view('front.event', compact('event'));
    }

    public function eventFormSend(Request $request){
        $this->validate($request, [
            'fullname' => 'required',
            'university' => 'required',
            'course' => 'required',
            'faculty' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'event' => 'required',
        ]);
        \App\Entity\Applications\Event::create($request->all());
        $response = Http::post('http://itparkdevtestdomain.uz/admin/events', [
            'fullname' => $request->input('fullname'),
            'university' => $request->input('university'),
            'course' => $request->input('course'),
            'faculty' => $request->input('faculty'),
            'phone' => $request->input('phone'),
            'email' => $request->input('email'),
            'event' => $request->input('event'),
        ]);
        flash('Спасибо. Заявка отправлена.')->success();
        return  redirect()->back();
    }

    public function showNews($locale, $slug){
        $news = News::whereTranslationLike('slug', $slug)->first();;

        return view('front.page.news', compact('news'));
    }

    public function showEvent($locale, $slug){

        $event = Event::whereSlug($slug)->first();;

        return view('front.page.event', compact('event'));
    }


}
