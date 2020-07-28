@extends('adminlte::page')

@section('title', 'Slider')

@section('plugins.summernote', true)
@section('plugins.Select2', true)

@section('content_header')
    <h1 class="m-0 text-dark">Edit Slider</h1>
@stop


@section('content')
    @if ($errors->any())
        <div class="row">
            <div class="col">
                <div class="alert alert-danger">
                    <p>Fields marked with (*) are required.</p>
                </div>
            </div>
        </div>
    @endif
    <form action="{{route('admin.slider.update', $slider->id)}}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="card-body">
                            <div class="form-group mb-4">
                                <label for="thumbnail" class="col-sm-5 col-form-label">Thumbnail</label><br>
                                <img src="{{$slider->getImagePath('thumbnail')}}" alt="" width="150">
                                <div class="custom-file d-block mt-3">
                                    <input type="file"
                                           class="custom-file-input {{ $errors->has('thumbnail') ? 'is-invalid' : '' }}"
                                           id="thumbnail" name="thumbnail">
                                    <label class="custom-file-label" for="thumbnail">Choose thumbnail...</label>
                                    @if ($errors->has('thumbnail'))
                                        <div class="invalid-feedback"><strong>{{ $errors->first('thumbnail') }}</strong>
                                        </div>
                                    @endif
                                </div>
                            </div>
                            <button type="submit" class="btn btn-info"><i class="fas fa-pencil-alt"></i> Update Slider</button>
                            <a href="{{route('admin.slider.index')}}" class="btn btn-primary"><i class="fas fa-angle-double-left"></i> Back</a>
                        </div>
                    </div>
                </div>
            </div>
    </form>
@stop


@section('js')
    <script>

        bsCustomFileInput.init();
        $('.summernote_field').summernote({
            height: 500
        });
        $('#post_categories').select2();


    </script>
@stop
