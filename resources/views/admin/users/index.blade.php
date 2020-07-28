@php
    /**
     * @var \App\Entity\User
     */
@endphp

@extends('adminlte::page')


@section('title', 'Users')

@section('content_header')
    <h1 class="m-0 text-dark">Users</h1>
@stop

@section('content')
    <div class="row">
        <div class="col-12">
            @include('flash::message')
            <a href="{{route('admin.users.create')}}" class="btn bg-gradient-success mb-2"><i class="fas fa-plus-square"></i> Create User</a>
            <div class="card">
                <div class="card-body">
                    <table id="users" class="table table-bordered table-hover dataTable" role="grid"
                           aria-describedby="example2_info">
                        <thead>
                        <tr role="row">
                            <th class="sorting_asc" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">
                                Name
                            </th>
                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                aria-label="Browser: activate to sort column ascending">Full Name
                            </th>
                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                aria-label="Platform(s): activate to sort column ascending">Email
                            </th>
                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                aria-label="CSS grade: activate to sort column ascending">Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($users as $user)
                            <tr role="row" class="odd">
                                <td class="sorting_1">{{$user->name}}</td>
                                <td>{{$user->fullname}}</td>
                                <td>{{$user->email}}</td>
                                <td class="text-center d-flex justify-content-center">
                                    <a href="{{route('admin.users.show', $user->id)}}" class="btn btn-primary"><i
                                            class="fas fa-folder"></i> View</a>
                                    <a href="{{route('admin.users.edit', $user->id)}}" class="btn btn-info"><i
                                            class="fas fa-pencil-alt"></i> Edit</a>
                                    <form method="POST" action="{{ route('admin.users.destroy', $user->id) }}" class="mr-1">
                                        @csrf
                                        @method('DELETE')
                                        <button class="btn btn-danger" onclick="return confirm('Are you sure?')"><i class="fas fa-trash"></i> Delete</button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@stop

@section('js')
    <script>
        $(document).ready(function () {
            $('#users').DataTable();
        });
    </script>
@stop

