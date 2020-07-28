@extends('adminlte::page')


@section('title', 'User')

@section('content_header')
    <h1 class="m-0 text-dark">Create User</h1>
@stop


@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    {{--<form class="form-horizontal" id="users_edit" action="{{ route('admin.users.store') }}"
                          method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="form-group">
                            <label for="name" class="col-sm-2 col-form-label">UserName</label>
                            <input type="text" class="form-control {{ $errors->has('name') ? 'is-invalid' : '' }}"
                                   id="name"
                                   name="name" value="{{ old('name') }}">
                            @if ($errors->has('name'))
                                <div class="invalid-feedback"><strong>{{ $errors->first('name') }}</strong></div>
                            @endif
                        </div>
                        <div class="form-group">
                            <label for="fullname" class="col-sm-2 col-form-label">Full Name</label>
                            <input type="text" class="form-control {{ $errors->has('fullname') ? 'is-invalid' : '' }}"
                                   id="fullname" name="fullname" value="{{ old('fullname') }}"
                            >
                            @if ($errors->has('fullname'))
                                <div class="invalid-feedback"><strong>{{ $errors->first('fullname') }}</strong></div>
                            @endif
                        </div>
                        <div class="form-group">
                            <label for="email" class="col-sm-2 col-form-label">Email</label>
                            <input type="email" class="form-control {{ $errors->has('email') ? 'is-invalid' : '' }}"
                                   id="email" name="email" value="{{ old('email') }}"
                            >
                            @if ($errors->has('email'))
                                <div class="invalid-feedback"><strong>{{ $errors->first('email') }}</strong></div>
                            @endif
                        </div>
                        <label for="password" class="col-sm-2 col-form-label">Password</label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control {{ $errors->has('password') ? 'is-invalid' : '' }}" id="password" name="password">
                            <div class="input-group-append">
                                <buttot type="button" class="btn btn-dark" id="generatePassword" onClick="generate();">
                                    Generate
                                </buttot>
                            </div>
                            @if ($errors->has('password'))
                                <div class="invalid-feedback"><strong>{{ $errors->first('password') }}</strong></div>
                            @endif
                        </div>

                        <div class="form-group mb-4">
                            <label for="inputFile" class="col-sm-2 col-form-label">Avatar</label> <br>
                            <div class="custom-file d-block mt-3">
                                <input type="file" class="custom-file-input  {{ $errors->has('avatar') ? 'is-invalid' : '' }}" id="validatedCustomFile" name="avatar">
                                <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                                @if ($errors->has('avatar'))
                                    <div class="invalid-feedback"><strong>{{ $errors->first('avatar') }}</strong></div>
                                @endif
                            </div>
                        </div>
                        <br><br>
                        <div class="form-group">
                            <button type="submit" class="btn bg-gradient-success"><i class="fas fa-plus-square"></i>
                                Create
                            </button>
                            <a href="{{route('admin.users.index')}}" class="btn btn-primary"><i
                                    class="fas fa-angle-double-left"></i> Back</a>
                        </div>
                    </form>--}}
                    {!! Form::open(['route' => 'admin.users.store','id' => 'user-create'] ) !!}
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="form-group">
                                        {{Form::label('name', 'Name (*)')}}
                                        {{Form::text('name', $value=old('name'), $attributes = ['class' => 'form-control'])}}
                                    </div>
                                    <div class="form-group">
                                        {{Form::label('fullname', 'Full Name (*)', ['class' => 'col-sm-5 col-form-label'])}}
                                        {{Form::text("fullname", $value=old('fullname'), $attributes = ['class' => 'form-control'])}}
                                    </div>
                                    <div class="form-group">
                                        {{Form::label('email', 'Email(*)', ['class' => 'col-sm-5 col-form-label'])}}
                                        {{Form::text("email", $value=old('email'), $attributes = ['class' => 'form-control'])}}
                                    </div>
                                    <div class="form-group">
                                        {{Form::label('password', 'Password (*)', ['class' => 'col-sm-5 col-form-label', 'id'=>'password'])}}
                                        {{Form::text("password", $value=old('password'), $attributes = ['class' => 'form-control'])}}
                                    </div>
                                    <buttot type="button" class="btn btn-dark" id="generatePassword" onClick="generate();">
                                        Generate
                                    </buttot>
                                    <div class="mt-4">
                                        <button type="submit" class="btn btn-success"><i class="fas fa-plus-square"></i> Create User
                                        </button>
                                        <a href="{{route('admin.users.index')}}" class="btn btn-primary"><i
                                                class="fas fa-angle-double-left"></i> Back</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {!! Form::close() !!}

                </div>
            </div>
        </div>
    </div>
@stop


@section('js')
    <script>
        let myForm = document.querySelector('#user-create');

        function randomPassword(length) {
            let chars = "abcdefghijklmnopqrstuvwxyz!@#$ABCDEFGHIJKLMNOP1234567890";
            let pass = "";
            for (let x = 0; x < length; x++) {
                let i = Math.floor(Math.random() * chars.length);
                pass += chars.charAt(i);
            }
            return pass;
        }

        function generate() {
            myForm.password.value = randomPassword(15);
        }


    </script>
@stop
