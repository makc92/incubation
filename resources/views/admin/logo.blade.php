@extends('adminlte::page')

@section('title', 'Logo')

@section('plugins.Select2', true)

@section('content_header')
    <h1 class="m-0 text-dark">Logo</h1>
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
    <form action="{{route('admin.logo.store')}}" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <img src="{{asset('images/logo.png')}}" alt="">
                        <div class="card-body">
                            <div class="form-group mb-4">
                                <label for="logo" class="col-sm-5 col-form-label">Logo</label>
                                <div class="custom-file d-block mt-3">
                                    <input type="file"
                                           class="custom-file-input {{ $errors->any() ? 'is-invalid' : '' }}"
                                           id="logo" name="logo">
                                    <label class="custom-file-label" for="logo">Choose thumbnail...</label>
                                    @if ($errors->any())
                                        <div class="invalid-feedback"><strong>{{ $errors->first() }}</strong>
                                        </div>
                                    @endif
                                </div>
                            </div>
                            <button type="submit" class="btn btn-success"><i class="fas fa-plus-square"></i> Upload Logo</button>
                            <a href="{{route('admin.home')}}" class="btn btn-primary"><i class="fas fa-angle-double-left"></i> Back</a>
                        </div>
                    </div>
                </div>
            </div>
    </form>
@stop


@section('js')
    <script>

        bsCustomFileInput.init();


    </script>
@stop
