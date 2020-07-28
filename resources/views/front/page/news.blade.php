@extends('layouts.page')
@section('title', 'News')


@section('lang')
    @foreach (config('app.languages') as $locale)
        <a href="{{route('news.show',[$locale,$news->translate($locale)->slug] )}}" @if (app()->getLocale() == $locale) style="font-weight: bold; text-decoration: underline" @endif class="text-link-white-2">{{ strtoupper($locale) }}</a>
    @endforeach
@endsection

@section('content')
    <section class="wow fadeIn bg-light-gray">
        <div class="container">
            <div class="col-10 mx-auto last-paragraph-no-margin text-justify text-md-left">
                <img src="{{$news->thumbnail ? $news->getImagePath('thumbnail') : asset('./images/news.png') }}" alt="" class="width-100 margin-50px-bottom md-margin-30px-bottom" data-no-retina="" style="box-shadow: 0 0 10px rgba(0,0,0,.2)">

                <h5 class="alt-font font-weight-600 text-extra-dark-gray">{{$news->translate(app()->getLocale())->title}}</h5>
                <div class="news-show">
                    {!! $news->translate(app()->getLocale())->content!!}
                </div>
            </div>
        </div>
    </section>
@endsection
