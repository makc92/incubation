@php
    /**
     * @var \App\Entity\Applications\Event
     */
@endphp

@extends('adminlte::page')


@section('title', 'Events Applications')

@section('content_header')
    <h1 class="m-0 text-dark">Events Applications</h1>
@stop

@section('content')
    <div class="row">
        <div class="col-12">
            @include('flash::message')
            @if(!$applications->isEmpty())
            <a href="{{route('admin.events.export')}}" class="btn bg-gradient-success mb-2"><i class="fas fa-plus-square"></i> EXPORT xlsx</a>
            @endif
            <div class="card">
                <div class="card-body">
                    <table id="application" class="table table-bordered table-hover dataTable" role="grid"
                           aria-describedby="example2_info">
                        <thead>
                        <tr role="row">
                            <th class="sorting_asc" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">
                                Created At
                            </th>
                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                aria-label="Browser: activate to sort column ascending">Full Name
                            </th>
                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                aria-label="Platform(s): activate to sort column ascending">University
                            </th>
                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                aria-label="CSS grade: activate to sort column ascending">	Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($applications as $application)
                            <tr role="row" class="odd">
                                <td class="sorting_1">{{$application->created_at}}</td>
                                <td>{{$application->fullname}}</td>
                                <td>{{$application->university}}</td>
                                <td class="text-center d-flex justify-content-center">
                                    <a href="{{route('admin.events.show', $application->id)}}" class="btn btn-primary"><i
                                            class="fas fa-folder"></i> View</a>
                                    <form method="POST" action="{{ route('admin.events.destroy', $application->id) }}" class="mr-1">
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
            $('#application').DataTable();
        });
    </script>
@stop

