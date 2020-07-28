@php
    /**
     * @var \App\Entity\Applications\Startup $startup
     *
     */
@endphp
@extends('adminlte::page')


@section('title', 'Startup Application')

@section('content_header')
    <h1 class="m-0 text-dark">Startup Application</h1>
@stop
@section('content')
    <div class="row">
        <div class="col-9">
            @include('flash::message')
            <div class="card">
                <div class="card-body">
                    <table class="table table-bordered">
                        <tbody>

                        <tr>
                            <th style="width: 20%">ФИО</th>
                            <td>{{$startup->fullname}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Наименование ВУЗа</th>
                            <td>{{$startup->university}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Курс</th>
                            <td>{{$startup->course}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Факультет</th>
                            <td>{{$startup->faculty}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Контактный номер</th>
                            <td>{{$startup->phone}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">E-mail</th>
                            <td>{{$startup->email}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Направление программы</th>
                            <td>{{$startup->program}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Название проекта</th>
                            <td>{{$startup->startup}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Сфера проекта</th>
                            <td>{{$startup->industry}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Краткое описание проекта</th>
                            <td>{{$startup->idea}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Дата подачи заявки</th>
                            <td>{{$startup->created_at}} </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-3">
            <div class="card">
                <div class="card-body">
                        <h5 class="font-weight-bold">Презентация</h5>
                        <p><a target="_blank" href="{{$startup->getFilePath('presentation')}}">Download</a></p><br>
                    <div class="d-flex">
                        <form method="POST" action="{{ route('admin.startups.destroy', $startup->id) }}"
                              class="mx-1">
                            @csrf
                            @method('DELETE')
                            <button class="btn btn-danger" onclick="return confirm('Are you sure?')"><i
                                    class="fas fa-trash"></i> Delete
                            </button>
                        </form>
                        <a href="{{route('admin.startups.index')}}" class="btn btn-primary"><i
                                class="fas fa-angle-double-left"></i> Back</a>
                    </div>

                </div>
            </div>
        </div>
    </div>


@stop

