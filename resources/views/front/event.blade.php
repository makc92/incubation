@extends('layouts.page')
@section('title', 'Event Application')
@section('lang')
    @foreach (config('app.languages') as $locale)
        <a href="{{ route('event', [$locale,$event->slug]) }}" @if (app()->getLocale() == $locale) style="font-weight: bold; text-decoration: underline" @endif class="text-link-white-2">{{ strtoupper($locale) }}</a>
    @endforeach
@endsection

@section('content')
    <section class="wow fadeIn bg-light-gray">
        <div class="container">
            <form action="{{route('event.send',[app()->getLocale(),$event->slug])}}" method="POST">
                @csrf
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-6 wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
                        <div class="bg-white border-radius-6">
                            @include('flash::message')
                            @if ($errors->any())
                                <div class="alert alert-danger">
                                    Заполните обязательные поля
                                </div>
                            @endif
                                <div id="success-contact-form-3" class="mx-0" style="display: none;"></div>
                                <input type="text" value="{{old('fullname')}}" name="fullname" id="fullname" placeholder="ФИО (*)" class="input-bg">
                                <input type="text" value="{{old('university')}}"  name="university" id="university" class="input-bg" placeholder="Название Университета">
                                <input type="text" value="{{old('course')}}" name="course" id="course" placeholder="Курс (*)" class="input-bg">
                                <input type="text" value="{{old('faculty')}}" name="faculty" id="faculty" placeholder="Факультет (*)" class="input-bg">
                                <input type="text" value="{{old('phone')}}" name="phone" id="phone" placeholder="Контактный номер (*)" class="input-bg">
                                <input type="text" value="{{old('email')}}" name="email" id="email" placeholder="E-mail (*)" class="input-bg">
                                <input type="text" name="event" id="event" value="{{$event->title}}" class="input-bg" readonly>
                                <button id="contact-us-button-3" type="submit" class="btn btn-small border-radius-4 btn-black">Отправить</button>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
@endsection
