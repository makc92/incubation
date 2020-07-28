@extends('layouts.page')
@section('title', 'Event')


@section('lang')
    @foreach (config('app.languages') as $locale)
        <a href="{{route('event.show',[$locale,$event->slug] )}}" @if (app()->getLocale() == $locale) style="font-weight: bold; text-decoration: underline" @endif class="text-link-white-2">{{ strtoupper($locale) }}</a>
    @endforeach
@endsection

@section('content')
    <section class="wow fadeIn bg-light-gray">
        <div class="container">
            <div class="col-10 mx-auto last-paragraph-no-margin text-justify text-md-left">
                <img src="{{$event->thumbnail ? $event->getImagePath('thumbnail') : asset('./images/event.jpg') }}" alt="" class="width-100 margin-50px-bottom md-margin-30px-bottom" data-no-retina="" style="box-shadow: 0 0 10px rgba(0,0,0,.2)">

                <h5 class="alt-font font-weight-600 text-extra-dark-gray">{{$event->translate(app()->getLocale())->title}}</h5>
                <div class="news-show">
                    {!! $event->translate(app()->getLocale())->content!!}
                </div>
                <a href="{{route('event' , [app()->getLocale(),$event->slug ])}}" class="btn btn-dark-gray btn-small text-extra-small btn-rounded margin-5px-top"><i class="fas fa-play-circle icon-very-small margin-5px-right no-margin-left" aria-hidden="true"></i> Регистрация</a>

            </div>
        </div>
    </section>
@endsection
