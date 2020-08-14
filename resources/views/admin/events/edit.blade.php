@extends('adminlte::page')

@section('title', 'Event')

@section('plugins.summernote', true)
@section('plugins.Select2', true)

@section('content_header')
    <h1 class="m-0 text-dark">Edit Event</h1>
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
    <form action="{{route('admin.event.update', $event->id)}}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        <div class="row">
            <div class="col-9">
                <div class="card card-primary card-outline card-outline-tabs">
                    <div class="card-header p-0 border-bottom-0">
                        <ul class="nav nav-tabs nav-justified" id="custom-tabs-three-tab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="custom-tabs-three-messages-tab" data-toggle="pill" href="#ru"
                                   role="tab" aria-controls="custom-tabs-three-messages" aria-selected="true">Русский
                                  </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="custom-tabs-three-profile-tab" data-toggle="pill" href="#uz"
                                   role="tab" aria-controls="custom-tabs-three-profile" aria-selected="false">Ozbek</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="custom-tabs-three-messages-tab" data-toggle="pill" href="#en"
                                   role="tab" aria-controls="custom-tabs-three-messages" aria-selected="true">English
                                    </a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="tab-content" id="custom-tabs-two-tabContent">
                            {{--------------------------------RU--------------------------------}}
                            <div class="tab-pane fade show active" id="ru" role="tabpanel" aria-labelledby="home-tab">
                                <div class="form-group">
                                    <label for="ru_content">Content (*)</label>
                                    <textarea class="form-control summernote_field  {{ $errors->has('ru_content') ? 'is-invalid' : '' }}" id="ru_content"
                                              aria-describedby="emailHelp"
                                              name="ru_content"> {!!$event->translate('ru')->content!!}</textarea>
                                </div>
                            </div>
                            {{--------------------------------UZ--------------------------------}}
                            <div class="tab-pane fade" id="uz" role="tabpanel" aria-labelledby="profile-tab">
                                <div class="form-group">
                                    <label for="uz_content">Content (*)</label>
                                    <textarea class="form-control summernote_field  {{ $errors->has('uz_content') ? 'is-invalid' : '' }}" id="uz_content"
                                              aria-describedby="emailHelp"
                                              name="uz_content"> {!!$event->translate('uz')->content!!}</textarea>
                                </div>
                            </div>
                            {{--------------------------------en--------------------------------}}
                            <div class="tab-pane fade" id="en" role="tabpanel" aria-labelledby="contact-tab">
                                <div class="form-group">
                                    <label for="en_content">Content (*)</label>
                                    <textarea class="form-control summernote_field  {{ $errors->has('en_content') ? 'is-invalid' : '' }}" id="en_content"
                                              aria-describedby="emailHelp"
                                              name="en_content"> {!!$event->translate('en')->content!!}</textarea>
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
                            <div class="form-group">
                                <label for="news_title">Event Title (*)</label>
                                <input type="text"
                                       class="form-control  {{ $errors->has('title') ? 'is-invalid' : '' }}"
                                       id="title" aria-describedby="emailHelp"
                                       name="title" value="{{$event->title}}">
                            </div>
                            <div class="form-group mb-4">
                                <label for="thumbnail" class="col-sm-5 col-form-label">Thumbnail</label><br>
                                <img src="{{$event->getImagePath('thumbnail')}}" alt="" width="150">
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
                            <button type="submit" class="btn btn-info"><i class="fas fa-pencil-alt"></i> Update Event</button>
                            <a href="{{route('admin.event.index')}}" class="btn btn-primary"><i class="fas fa-angle-double-left"></i> Back</a>
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
        $('#post_categories').select2({ width: '100%' });


    </script>
@stop
