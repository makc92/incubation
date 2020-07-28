@php
    /**
     * @var \App\Entity\User
     */
@endphp

@extends('adminlte::page')


@section('title', 'Contact Info')

@section('content_header')
    <h1 class="m-0 text-dark">Contact Info</h1>
    {{--  --}}
@stop

@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    @if ($errors->any())
                        <div class="alert alert-danger">
                            Заполните обязательные поля
                        </div>
                    @endif
                    @include('flash::message')
                    {!! Form::open(['route' => ['admin.info.contact',$info->id], 'method'=>'put', 'id' => 'user-create'] ) !!}
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                {{Form::label('name', 'Контактная информация(*)')}}
                                {{Form::textarea('contact', $value=old('contact',  $info->contact), $attributes = ['class' => 'form-control'])}}
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                {{Form::label('name', 'Facebook')}}
                                {{Form::text('social[facebook]', $value=old('social[facebook]',  $info->social['facebook']), $attributes = ['class' => 'form-control'])}}
                            </div>
                            <div class="form-group">
                                {{Form::label('name', 'Instagram ')}}
                                {{Form::text('social[instagram]', $value=old('social[instagram]', $info->social['instagram']), $attributes = ['class' => 'form-control'])}}
                            </div>
                            <div class="form-group">
                                {{Form::label('name', 'Telegram')}}
                                {{Form::text('social[telegram]', $value=old('social[telegram]', $info->social['telegram']), $attributes = ['class' => 'form-control'])}}
                            </div>
                            <div class="form-group">
                                {{Form::label('name', 'Twitter')}}
                                {{Form::text('social[twitter]', $value=old('social[twitter]', $info->social['twitter']), $attributes = ['class' => 'form-control'])}}
                            </div>
                            <div class="form-group">
                                {{Form::label('name', 'Youtube ')}}
                                {{Form::text('social[youtube]', $value=old('social[youtube]', $info->social['youtube']), $attributes = ['class' => 'form-control'])}}
                            </div>
                        </div>
                    </div>
                    {{ Form::button('Update',['class'=>'btn btn-info','type'=>'submit','id'=>'id-button']) }}

                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
@stop

@section('js')

@stop

