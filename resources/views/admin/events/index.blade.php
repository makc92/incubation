@extends('adminlte::page')


@section('title', 'Events')

@section('content_header')
    <h1 class="m-0 text-dark">All Events</h1>
@stop

@section('content')
    <div class="row">
        <div class="col-10">
            @include('flash::message')
            <a href="{{route('admin.event.create')}}" class="btn bg-gradient-success mb-2"><i class="fas fa-plus-square"></i> Create Event</a>
            <div class="card">
                <div class="card-body">
                    <table id="news" class="table table-bordered table-hover dataTable" role="grid"
                           aria-describedby="example2_info">
                        <thead>
                        <tr role="row">
                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                aria-label="Browser: activate to sort column ascending">Created At
                            </th>
                            <th class="sorting_asc" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">
                                Title
                            </th>
                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                aria-label="Browser: activate to sort column ascending">Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($events as $event)
                            <tr role="row" class="odd">
                                <td>{{$event->created_at}}</td>
                                <td class="sorting_1">{{$event->title}}</td>
                                <td class="text-center d-flex justify-content-center">
                                    <a href="{{route('admin.event.show', $event->id)}}" class="btn btn-primary"><i
                                            class="fas fa-folder"></i> View</a>
                                    <a href="{{route('admin.event.edit', $event->id)}}" class="btn btn-info"><i
                                            class="fas fa-pencil-alt"></i> Edit</a>
                                    <form method="POST" action="{{ route('admin.event.destroy', $event->id) }}" class="mr-1">
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
            $('#news').DataTable({
                "order": [[0, 'desc']]
            });
        });
    </script>
@stop

