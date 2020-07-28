@extends('adminlte::page')


@section('title', 'User')

@section('content_header')
    <h1 class="m-0 text-dark">User</h1>
@stop

@section('content')
    <div class="row">
        <div class="col-12">
            @include('flash::message')
            <div class="card">
                <div class="card-body">
                    <table class="table table-bordered">
                        <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{{$user->name}}</td>
                        </tr>
                        <tr>
                            <th>FullName</th>
                            <td>{{$user->fullname}}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{{$user->email}}</td>
                        </tr>
                        <tr>
                            <th>Reg date</th>
                            <td>{{$user->created_at}}</td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="mt-3">
                        <a href="{{route('admin.users.edit', $user->id)}}" class="btn btn-info"><i class="fas fa-pencil-alt"></i> Edit</a>
                        <form method="POST" action="{{ route('admin.users.destroy', $user) }}" class="mr-1" style="display: inline-block">
                            @csrf
                            @method('DELETE')
                            <button class="btn btn-danger" onclick="return confirm('Are you sure?')"><i class="fas fa-trash"></i> Delete</button>
                        </form>
                        <a href="{{route('admin.users.index')}}" class="btn btn-primary"><i class="fas fa-angle-double-left"></i> Back</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop
