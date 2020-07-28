@extends('layouts.page')
@section('title', 'Tracker Application')

@section('lang')
    @foreach (config('app.languages') as $locale)
        <a href="{{ route('tracker', $locale) }}" @if (app()->getLocale() == $locale) style="font-weight: bold; text-decoration: underline" @endif class="text-link-white-2">{{ strtoupper($locale) }}</a>
    @endforeach
@endsection


@section('content')
    <section class="wow fadeIn bg-light-gray">
        <div class="container">
            <form action="{{route('tracker.send', app()->getLocale())}}" method="POST">
                @csrf
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-6 wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
                        <div class="bg-white border-radius-6 ">
                                @include('flash::message')
                                @if ($errors->any())
                                    <div class="alert alert-danger">
                                        Заполните обязательные поля
                                    </div>
                                @endif
                                <input type="text" value="{{old('fullname')}}" name="fullname" id="name" placeholder="ФИО (*)" class="input-bg">
                                <input type="text" value="{{old('company')}}" name="company" id="name" placeholder="Компания (*)" class="input-bg">
                                <input type="text" value="{{old('position')}}" name="position" id="name" placeholder="Должность (*)" class="input-bg">
                                <input type="text" value="{{old('phone')}}" name="phone" id="name" placeholder="Контактный номер (*)" class="input-bg">
                                <input type="text" value="{{old('email')}}" name="email" id="name" placeholder="E-mail (*)" class="input-bg">
                                <input type="text" value="{{old('sphere')}}" name="sphere" id="name" placeholder="Ваши основные компетенции и в какой сфере? (*)" class="input-bg">
                                <input type="text" value="{{old('university')}}" name="university" id="name" placeholder="Наименования ВУЗа для трекерства (*)" class="input-bg">
                                <input type="text" value="{{old('graduate')}}" name="graduate" id="name" placeholder="Являетесь ли Вы выпускником данного Вуза? (*)" class="input-bg">
                                <button id="contact-us-button-3" type="submit" class="btn btn-small border-radius-4 btn-black">Отправить</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
@endsection
