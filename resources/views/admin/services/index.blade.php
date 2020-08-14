@extends('adminlte::page')

@section('title', 'Services')

@section('css')
    <style>
        .link-container {
            opacity: 0;
            transition: .5s;
            margin-top: 5px;
        }
        .link-container .btn {
            padding: 0;
            display: inline-block;
            margin-right: 10px;
        }
        .category-row:hover .link-container {
            opacity: 1;
        }
    </style>

@stop

@section('content_header')
    <h1 class="m-0 text-dark">Services</h1>
@stop


@section('content')
    @include('flash::message')
    <div class="row">
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h4 class="mb-3">Add service</h4>
                  {{--  <form action="{{route('admin.services.store')}}" method="POST">
                        @csrf
                        <div class="form-group">
                            <label for="title">Service RU (*)</label>
                            <input type="text" class="form-control {{ $errors->has('service_ru') ? 'is-invalid' : '' }}" id="title" aria-describedby="emailHelp"
                                   name="title" value="{{ old('title') }}">

                        </div>
                        <button type="submit" class="btn btn-success">Create</button>
                    </form>--}}
                    {!! Form::open(['route' => 'admin.services.store']) !!}
                    <div class="form-group">
                        {{Form::label('service[ru]', 'Service RU (*)', ['class' => 'col-sm-5 col-form-label'])}}
                        {{Form::text("service[ru]", $value=old('service[ru]'), $attributes = ['class' => 'form-control'])}}
                    </div>
                    <div class="form-group">
                        {{Form::label('service[uz]', 'Service UZ (*)', ['class' => 'col-sm-5 col-form-label'])}}
                        {{Form::text("service[uz]", $value=old('service[uz]'), $attributes = ['class' => 'form-control'])}}
                    </div>
                    <div class="form-group">
                        {{Form::label('service[en]', 'Service EN (*)', ['class' => 'col-sm-5 col-form-label'])}}
                        {{Form::text("service[en]", $value=old('service[en]'), $attributes = ['class' => 'form-control'])}}
                    </div>
                    <button type="submit" class="btn btn-success"><i class="fas fa-plus-square"></i> Create Service
                    </button>
                    {!! Form::close() !!}

                </div>
            </div>
        </div>
        <div class="col-md-8">
            <div class="card">
                <div class="card-body">
                    <h4 class="mb-3">All services</h4>
                    <table id="services" class="table table-bordered table-hover dataTable" role="grid"
                           aria-describedby="example2_info">
                        <thead>
                        <tr role="row">
                            <th class="sorting_asc" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">
                                Service
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($services as $service)
                            <tr role="row" class="category-row">
                                <td class="sorting_1">
                                    {{$service->service['ru']}} <br>
                                    <div class="d-flex link-container">
                                        <form method="POST" action="{{ route('admin.services.destroy', $service->id) }}" class="mr-1">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn btn-link" onclick="return confirm('Are you sure?')"><i class="fas fa-trash"></i> Delete</button>
                                        </form>
                                    </div>

                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </form>
@stop


@section('js')
    <script>
        $(document).ready(function () {
            $('#services').DataTable({
                "pageLength": 5,
                "lengthChange": false,
                "info": false
            });
        });
    </script>
@stop


