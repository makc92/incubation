@php
    /**
     * @var \App\Entity\Applications\Event $event
     *
     */
@endphp
@extends('adminlte::page')


@section('title', 'Events Application')

@section('content_header')
    <h1 class="m-0 text-dark">Events Application</h1>
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
                            <td>{{$event->fullname}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Наименование ВУЗа</th>
                            <td>{{$event->university}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Курс</th>
                            <td>{{$event->course}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Факультет</th>
                            <td>{{$event->faculty}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Контактный номер</th>
                            <td>{{$event->phone}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">E-mail</th>
                            <td>{{$event->email}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Мероприятие</th>
                            <td>{{$event->event}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">created_at</th>
                            <td>{{$event->created_at}} </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-3">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex">
                        <form method="POST" action="{{ route('admin.events.destroy', $event->id) }}"
                              class="mx-1">
                            @csrf
                            @method('DELETE')
                            <button class="btn btn-danger" onclick="return confirm('Are you sure?')"><i
                                    class="fas fa-trash"></i> Delete
                            </button>
                        </form>
                        <a href="{{route('admin.events.index')}}" class="btn btn-primary"><i
                                class="fas fa-angle-double-left"></i> Back</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


@stop

