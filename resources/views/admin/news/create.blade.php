@extends('adminlte::page')

@section('title', 'News')

@section('plugins.summernote', true)
@section('plugins.Select2', true)

@section('content_header')
    <h1 class="m-0 text-dark">Create News</h1>
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
    <form action="{{route('admin.news.store')}}" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="row">
            <div class="col-9">
                <div class="card card-primary card-outline card-outline-tabs">
                    <div class="card-header p-0 border-bottom-0">
                        <ul class="nav nav-tabs nav-justified" id="custom-tabs-three-tab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="custom-tabs-three-messages-tab" data-toggle="pill" href="#ru"
                                   role="tab" aria-controls="custom-tabs-three-messages" aria-selected="true">Русский</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="custom-tabs-three-profile-tab" data-toggle="pill" href="#uz"
                                   role="tab" aria-controls="custom-tabs-three-profile" aria-selected="false">Ozbek</a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="custom-tabs-three-messages-tab" data-toggle="pill" href="#en"
                                   role="tab" aria-controls="custom-tabs-three-messages" aria-selected="true">English</a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="tab-content" id="custom-tabs-two-tabContent">
                            {{--------------------------------RU--------------------------------}}
                            <div class="tab-pane fade show active" id="ru" role="tabpanel" aria-labelledby="home-tab">
                                <div class="form-group">
                                    <label for="news_title">Title (*)</label>
                                    <input type="text"
                                           class="form-control {{ $errors->has('ru_title') ? 'is-invalid' : '' }}"
                                           id="news_title" aria-describedby="emailHelp"
                                           name="ru_title" value="{{ old('ru_title') }}">

                                </div>
                                <div class="form-group">
                                    <label for="news_content">Content (*)</label>
                                    <textarea class="form-control summernote_field  {{ $errors->has('ru_content') ? 'is-invalid' : '' }}" id="news_content"
                                              aria-describedby="emailHelp"
                                              name="ru_content">{{ old('ru_content') }}</textarea>
                                </div>
                            </div>
                            {{--------------------------------UZ--------------------------------}}
                            <div class="tab-pane fade" id="uz" role="tabpanel" aria-labelledby="profile-tab">
                                <div class="form-group">
                                    <label for="news_title">Title (*)</label>
                                    <input type="text"
                                           class="form-control  {{ $errors->has('uz_title') ? 'is-invalid' : '' }}"
                                           id="news_title" aria-describedby="emailHelp"
                                           name="uz_title" value="{{ old('uz_title') }}">
                                </div>
                                <div class="form-group">
                                    <label for="news_title">Content (*)</label>
                                    <textarea class="form-control summernote_field  {{ $errors->has('uz_content') ? 'is-invalid' : '' }}" id="news_content"
                                              aria-describedby="emailHelp"
                                              name="uz_content">{{old('uz_content')}}</textarea>
                                </div>
                            </div>
                            {{--------------------------------en--------------------------------}}
                            <div class="tab-pane fade" id="en" role="tabpanel" aria-labelledby="contact-tab">
                                <div class="form-group">
                                    <label for="news_title">Title (*)</label>
                                    <input type="text"
                                           class="form-control  {{ $errors->has('en_title') ? 'is-invalid' : '' }}"
                                           id="news_title" aria-describedby="emailHelp"
                                           name="en_title"  value="{{ old('en_title') }}">
                                </div>
                                <div class="form-group">
                                    <label for="news_title">Content (*)</label>
                                    <textarea class="form-control summernote_field  {{ $errors->has('en_content') ? 'is-invalid' : '' }}" id="news_content"
                                              aria-describedby="emailHelp"
                                              name="en_content">{{old('en_content')}}</textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card">
                    <div class="card-body">
                        <div class="card-body">
                            <div class="form-group mb-4">
                                <label for="inputFile" class="col-sm-5 col-form-label">Thumbnail</label>
                                <div class="custom-file d-block mt-3">
                                    <input type="file"
                                           class="custom-file-input {{ $errors->has('thumbnail') ? 'is-invalid' : '' }}"
                                           id="validatedCustomFile" name="thumbnail">
                                    <label class="custom-file-label" for="thumbnail">Choose thumbnail...</label>
                                    @if ($errors->has('thumbnail'))
                                        <div class="invalid-feedback"><strong>{{ $errors->first('thumbnail') }}</strong>
                                        </div>
                                    @endif
                                </div>
                            </div>
                            <button type="submit" class="btn btn-success"><i class="fas fa-plus-square"></i> Create News</button>
                            <a href="{{route('admin.news.index')}}" class="btn btn-primary"><i class="fas fa-angle-double-left"></i> Back</a>
                        </div>
                    </div>
                </div>
            </div>
    </form>
@stop


@section('js')
 {{--   <script src="{{ asset('/js/ckeditor/ckeditor.js') }}"></script>
    <script>
        CKEDITOR.replace( 'ru_content', {
            filebrowserUploadUrl: "{{route('admin.upload', ['_token' => csrf_token() ])}}",
            filebrowserUploadMethod: 'form'
        });
        CKEDITOR.replace( 'uz_content', {
            filebrowserUploadUrl: "{{route('admin.upload', ['_token' => csrf_token() ])}}",
            filebrowserUploadMethod: 'form'
        });

        CKEDITOR.replace( 'en_content', {
            filebrowserUploadUrl: "{{route('admin.upload', ['_token' => csrf_token() ])}}",
            filebrowserUploadMethod: 'form'
        });

        bsCustomFileInput.init();
        $('#post_categories').select2({ width: '100%' });


    </script>--}}
        <script>

            bsCustomFileInput.init();
            $('.summernote_field').summernote({
                height: 500
            });
            $('#post_categories').select2();


        </script>
@stop
