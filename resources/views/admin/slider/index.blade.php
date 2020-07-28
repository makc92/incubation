@extends('adminlte::page')


@section('title', 'Slider')

@section('content_header')
    <h1 class="m-0 text-dark">All Slider Pictures</h1>
@stop

@section('content')
    <div class="row">
        <div class="col-12">
            @include('flash::message')
            <a href="{{route('admin.slider.create')}}" class="btn bg-gradient-success mb-2"><i class="fas fa-plus-square"></i> Create slider</a>
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
                                Picture
                            </th>
                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                aria-label="Browser: activate to sort column ascending">Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($sliders as $slider)
                            <tr role="row" class="odd">
                                <td>{{$slider->created_at}}</td>
                                <td class="sorting_1"><img src="{{$slider->getImagePath('thumbnail','thumb')}}" alt=""> </td>
                                <td class="text-center d-flex justify-content-center">
{{--                                    <a href="{{route('admin.slider.show', $slider->id)}}" class="btn btn-primary"><i
                                            class="fas fa-folder"></i> View</a>--}}
                                    <a href="{{route('admin.slider.edit', $slider->id)}}" class="btn btn-info"><i
                                            class="fas fa-pencil-alt"></i> Edit</a>
                                    <form method="POST" action="{{ route('admin.slider.destroy', $slider->id) }}" class="mr-1">
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

