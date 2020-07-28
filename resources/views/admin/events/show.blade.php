@php
    /**
     * @var \App\Entity\News $news
     * @var \App\Entity\NewsTranslation $news
     */
@endphp
@extends('adminlte::page')


@section('title', 'Event')

@section('content_header')
    <h1 class="m-0 text-dark">Event</h1>
@stop
@section('content')
    <div class="row">
        <div class="col-9">
            @include('flash::message')
            <div class="card card-primary card-outline card-outline-tabs">
                <div class="card-header p-0 border-bottom-0">
                    <ul class="nav nav-tabs nav-justified" id="custom-tabs-three-tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="custom-tabs-three-messages-tab" data-toggle="pill" href="#ru"
                               role="tab" aria-controls="custom-tabs-three-messages" aria-selected="true">Русский
                                <img
                                    src="{{asset('storage/flags/russia-flag-icon-32.png')}}" alt="" width="32"
                                    height="16"></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="custom-tabs-three-profile-tab" data-toggle="pill" href="#uz"
                               role="tab" aria-controls="custom-tabs-three-profile" aria-selected="false">Ozbek <img
                                    src="{{asset('storage/flags/uzbekistan-flag-icon-32.png')}}" alt=""></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="custom-tabs-three-messages-tab" data-toggle="pill" href="#en"
                               role="tab" aria-controls="custom-tabs-three-messages" aria-selected="true">English
                                <img
                                    src="{{asset('storage/flags/united-kingdom-flag-icon-32.png')}}" alt=""></a>
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <div class="tab-content" id="custom-tabs-two-tabContent">
                        {{--------------------------------RU--------------------------------}}
                        <div class="tab-pane fade show active" id="ru" role="tabpanel" aria-labelledby="home-tab">
                            {{--<p>{{$news->translate('ru')->short_content}}</p>--}}
                            {!!$event->translate('ru')->content!!}
                        </div>
                        {{--------------------------------UZ--------------------------------}}
                        <div class="tab-pane fade" id="uz" role="tabpanel" aria-labelledby="profile-tab">
                            {{--<p>{{$news->translate('uz')->short_content}}</p>--}}
                            {!!$event->translate('uz')->content!!}
                        </div>
                        {{--------------------------------en--------------------------------}}
                        <div class="tab-pane fade" id="en" role="tabpanel" aria-labelledby="contact-tab">
                            {{--<p>{{$news->translate('en')->short_content}}</p>--}}
                            {!!$event->translate('en')->content!!}
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-3">
            <div class="card">
                <div class="card-body">
                    <p class="font-weight-bold">Event title</p>
                    <p>{{$event->title}}</p>
                    <p class="font-weight-bold">Created</p>
                    <p>{{$event->created_at}}</p>
                    <hr>
                    <p class="font-weight-bold">Thumbnail</p>
                    <img src="{{$event->getImagePath('thumbnail')}}" alt="" width="200"> <br><br>
                    {{--
                                            <a class="article-card" href="{{route('itpark.news.show',[app()->getLocale(),$news->translate(app()->getLocale())->slug] )}}" target="_blank">Посмотреть на сайте</a>
                    --}}

                    <a href="{{route('admin.event.edit', $event->id)}}" class="btn btn-info"><i
                            class="fas fa-pencil-alt"></i> Edit</a>
                    <a href="{{route('admin.event.index')}}" class="btn btn-primary"><i class="fas fa-angle-double-left"></i> Back</a>
                </div>
            </div>
        </div>
    </div>
@stop

@section('js')
    <script>

        $(document).ready(function () {
            $('#news').DataTable();
        });
    </script>
@stop

