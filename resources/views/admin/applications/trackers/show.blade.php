@php
    /**
     * @var \App\Entity\Applications\Tracker $tracker
     *
     */
@endphp
@extends('adminlte::page')


@section('title', 'Tracker Application')

@section('content_header')
    <h1 class="m-0 text-dark">Tracker Application</h1>
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
                            <td>{{$tracker->fullname}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Компания</th>
                            <td>{{$tracker->company}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Должность</th>
                            <td>{{$tracker->position}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Контактный номер</th>
                            <td>{{$tracker->phone}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">E-mail</th>
                            <td>{{$tracker->email}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Ваши основные компетенции и в какой сфере?</th>
                            <td>{{$tracker->sphere}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%"> Наименования ВУЗа для трекерства</th>
                            <td>{{$tracker->university}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Являетесь ли Вы выпускником данного Вуза?</th>
                            <td>{{$tracker->graduate}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">created_at</th>
                            <td>{{$tracker->created_at}} </td>
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
                        <form method="POST" action="{{ route('admin.trackers.destroy', $tracker->id) }}"
                              class="mx-1">
                            @csrf
                            @method('DELETE')
                            <button class="btn btn-danger" onclick="return confirm('Are you sure?')"><i
                                    class="fas fa-trash"></i> Delete
                            </button>
                        </form>
                        <a href="{{route('admin.trackers.index')}}" class="btn btn-primary"><i
                                class="fas fa-angle-double-left"></i> Back</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


@stop

