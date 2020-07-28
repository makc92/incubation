@php
    /**
     * @var \App\Entity\Applications\Mentor $application
     *
     */
@endphp
@extends('adminlte::page')


@section('title', 'Mentor Application')

@section('content_header')
    <h1 class="m-0 text-dark">Mentor Application</h1>
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
                            <td>{{$mentor->fullname}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Компания</th>
                            <td>{{$mentor->company}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Должность</th>
                            <td>{{$mentor->position}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Контактный номер</th>
                            <td>{{$mentor->phone}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">E-mail</th>
                            <td>{{$mentor->email}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Ваши основные компетенции и в какой сфере?</th>
                            <td>{{$mentor->sphere}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Наименования ВУЗа для менторства</th>
                            <td>{{$mentor->university}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Являетесь ли Вы выпускником данного Вуза?</th>
                            <td>{{$mentor->graduate}}</td>
                        </tr>
                        <tr>
                            <th style="width: 20%">Дата подачи заявки</th>
                            <td>{{$mentor->created_at}} </td>
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
                        <form method="POST" action="{{ route('admin.mentors.destroy', $mentor->id) }}"
                              class="mx-1">
                            @csrf
                            @method('DELETE')
                            <button class="btn btn-danger" onclick="return confirm('Are you sure?')"><i
                                    class="fas fa-trash"></i> Delete
                            </button>
                        </form>
                        <a href="{{route('admin.mentors.index')}}" class="btn btn-primary"><i
                                class="fas fa-angle-double-left"></i> Back</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

@stop

