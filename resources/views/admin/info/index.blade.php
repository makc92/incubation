@php
    /**
     * @var \App\Entity\User
     */
@endphp

@extends('adminlte::page')
@section('plugins.summernote', true)


@section('title', 'Main Info')

@section('content_header')
    <h1 class="m-0 text-dark">Main Info</h1>
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
                    {!! Form::open(['route' => ['admin.info.university',$info->id], 'method'=>'put', 'id' => 'user-create'] ) !!}
                        <div class="form-group">
                            {{Form::label('name', 'Название Университета (*)')}}
                            {{Form::text('university', $value=old('university', $info->university), $attributes = ['class' => 'form-control'])}}
                        </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                {{Form::label('name', 'Про центр RU (*)')}}
                                {{Form::textarea('about[ru]', $value=old('about[ru]',  $info->about['ru']), $attributes = ['class' => 'form-control'])}}
                            </div>
                            <div class="form-group">
                                {{Form::label('name', 'Про центр UZ (*)')}}
                                {{Form::textarea('about[uz]', $value=old('about[ru]', $info->about['uz']), $attributes = ['class' => 'form-control'])}}
                            </div>
                            <div class="form-group">
                                {{Form::label('name', 'Про центр EN (*)')}}
                                {{Form::textarea('about[en]', $value=old('about[ru]', $info->about['en']), $attributes = ['class' => 'form-control'])}}
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                {{Form::label('name', 'Услуги Центра RU (*)')}}
                                {{Form::textarea('services[ru]', $value=old('services[ru]',  $info->services['ru']), $attributes = ['class' => 'form-control summernote_field'])}}
                            </div>
                            <div class="form-group">
                                {{Form::label('name', 'Услуги Центра UZ (*)')}}
                                {{Form::textarea('services[uz]', $value=old('services[ru]', $info->services['uz']), $attributes = ['class' => 'form-control summernote_field'])}}
                            </div>
                            <div class="form-group">
                                {{Form::label('name', 'Услуги Центра EN (*)')}}
                                {{Form::textarea('services[en]', $value=old('services[ru]', $info->services['en']), $attributes = ['class' => 'form-control summernote_field'])}}
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
    <script>
        $('.summernote_field').summernote({
            height: 300
        });
    </script>
@stop

