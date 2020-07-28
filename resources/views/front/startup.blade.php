@extends('layouts.page')
@section('title', 'Startup Application')

@section('lang')
    @foreach (config('app.languages') as $locale)
        <a href="{{ route('startup', $locale) }}" @if (app()->getLocale() == $locale) style="font-weight: bold; text-decoration: underline" @endif class="text-link-white-2">{{ strtoupper($locale) }}</a>
    @endforeach
@endsection


@section('content')
    <section class="wow fadeIn bg-light-gray">
        <div class="container">
            <form action="{{route('startup.send', app()->getLocale())}}" method="POST"    enctype="multipart/form-data">
                @csrf
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-8 wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
                        <div class="bg-white border-radius-6">
                            @include('flash::message')
                            @if ($errors->any())
                                <div class="alert alert-danger">
                                    Заполните обязательные поля
                                </div>
                            @endif
                            <label for="fullname">ФИО(*)</label>
                            <input type="text" value="{{old('fullname')}}" name="fullname" id="fullname" class="big-input">
                            <label for="university">Наименование ВУЗа (*)</label>
                            <input type="text" name="university" id="university" class="big-input" value="{{$university}}" readonly>
                            <label for="course">Курс(*)</label>
                            <input type="text" value="{{old('course')}}" name="course" id="course" class="big-input">
                            <label for="faculty">Факультет (*)</label>
                            <input type="text" value="{{old('faculty')}}" name="faculty" id="faculty" class="big-input">
                            <label for="phone">Контактный номер (*)</label>
                            <input type="text" value="{{old('phone')}}" name="phone" id="phone" class="big-input">
                            <label for="email">E-mail (*)</label>
                            <input type="email" value="{{old('email')}}" name="email" id="email" class="big-input">
                            <label for="program">Направление программы (*)</label>
                            <div class="select-style big-select">
                                <select name="program" id="program" class="bg-transparent mb-0">
                                    <option value="incubation">Инкубация</option>
                                    <option value="accseleration">Акселерация</option>
                                </select>
                            </div>
                            <label for="startup">Название проекта (*)</label>
                            <input type="text" value="{{old('startup')}}" name="startup" id="startup" class="big-input">
                            <label for="industry">Сфера проекта (*)</label>
                            <input type="text" value="{{old('industry')}}" name="industry" id="industry" class="big-input">
                            <label for="idea">Краткое описание проекта (*)</label>
                            <textarea name="idea" id="idea" cols="30" rows="10" class="big-input">{{old('idea')}}</textarea>
                            <label for="presentation">Презентация проекта (*)</label>
                            <small id="emailHelp" class="form-text text-muted mb-1">Не более 5мб в формате .PDF</small>
                            <div class="custom-file mb-4 ">
                                <input type="file" class="custom-file-input" required="" name="presentation" id="presentation">
                                <label class="custom-file-label" for="presentation"></label>
                            </div>
                            <button id="contact-us-button-3" type="submit"
                                    class="btn btn-small border-radius-4 btn-black">Отправить
                            </button>
                        </div>
                    </div>
            </form>
        </div>
    </section>
@endsection
