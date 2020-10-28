<!doctype html>
<html class="no-js" lang="en">
<head>
    <!-- title -->
    <title>@yield('title')</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1"/>
    <meta name="author" content="ITPARK">
    <!-- description -->
    <meta name="description"
          content="ITPARK Incubation Center">
    <!-- keywords -->
    <meta name="keywords"
          content="Itpark, Incubation, Acceleration, Mentoring, Tracking, Uzbekistan, University">
    <!-- favicon -->
    <link rel="shortcut icon" href="{{asset('images/favicon.ico')}}">
    <link rel="stylesheet" href="{{mix('/css/main.css')}}">
</head>
<body>
<!-- start header -->
<header class="">
    <div class="top-header-area bg-black padding-10px-tb">
        <div class="container">
            <div class="row align-items-center justify-content-end">
                <div class="col-md-6 d-md-flex align-items-center justify-content-end">
                    <div class="display-inline-block line-height-normal">
                        @yield('lang')
                    </div>
                </div>
            </div>
        </div>
    </div>
    <nav
        class="navbar navbar-default bootsnav bg-transparent navbar-brand-top nav-box-width navbar-expand-lg on no-full">
        <div class="container nav-header-container  text-center flex-column">
            <div class="col col-lg-12 mr-0 d-flex justify-content-lg-between align-items-center flex-grow-1 text-center mt-2">
                <a href="/" title="Pofo" class="navbar-brand p-0 m-auto" style="font-size: 1rem;!important">
                    {{$university}}
                </a>
            </div>
            <div class="col-auto mt-2 w-100 justify-content-between d-flex">
                <a href="/" class="navbar-brand p-0">
                    <img src="{{asset('/images/logo.png')}}" class="default" alt="Pofo" width="100"
                         height="100">
                </a>
                <a href="https://it-park.uz/" target="_blank" class="navbar-brand p-0">
                    <img src="{{asset('/images/it-park-logo.svg')}}" class="default" alt="Pofo" width="100"
                         height="100">
                </a>
            </div>
            <div class="col-auto col-lg accordion-menu pr-lg-0 d-flex">
                <button type="button" class="navbar-toggler collapsed" data-toggle="collapse"
                        data-target="#navbar-collapse-toggle-1">
                    <span class="sr-only">toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <div class="navbar-collapse collapse" id="navbar-collapse-toggle-1">
                    <ul class="nav navbar-nav alt-font font-weight-700 flex-grow-1  justify-content-between">
                        <li><a href="#about" class="inner-link">{{__('menu.about')}}</a></li>
                        <li><a href="#programs" class="inner-link">{{__('menu.program')}}</a></li>
                        <li><a href="#events" class="inner-link">{{__('menu.events')}}</a></li>
                        <li><a href="#mentors" class="inner-link">{{__('menu.mentor')}}</a></li>
                        <li><a href="#trackers" class="inner-link">{{__('menu.tracker')}}</a></li>
                        <li><a href="#news" class="inner-link">{{__('menu.news')}}</a></li>
                        <li><a href="#contacts" class="inner-link">{{__('menu.contact')}}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <!-- end navigation -->
</header>

@yield('content')

<footer class="footer-strip-dark bg-extra-dark-gray padding-50px-tb sm-padding-30px-tb" id="contacts">
    <div class="container">
        <div class="row align-items-center">
            <!-- start logo -->
            <div class="col-md-3 text-center text-lg-left sm-margin-20px-bottom">
                <p class="mb-0">{!!$info->contact!!}</p>
            </div>
            <!-- end logo -->
            <!-- start copyright -->
            <div class="col-md-6 text-center text-small alt-font sm-margin-10px-bottom">
                &copy; 2020 Powered by <a href="https://www.it-park.uz" target="_blank"
                                          title="ITPARK" style="color: #7dba29; font-weight: 700">ITPARK</a>.
            </div>
            <!-- end copyright -->
            <!-- start social media -->
            <div class="col-md-3 text-center text-lg-right">
                <div class="social-icon-style-8 d-inline-block vertical-align-middle">
                    <ul class="small-icon mb-0">
                        @foreach($info->social as $key => $social)
                            @if($social)
                                <li>
                                    <a style="text-transform:capitalize" class="facebook" href="{{$social}}" target="_blank">{{$key}}</a>
                                </li>
                            @endif
                        @endforeach
                    </ul>
                </div>
            </div>
            <!-- end social media -->
        </div>
    </div>
</footer>


<a class="scroll-top-arrow" href="javascript:void(0);"><i class="fa fa-arrow-up" aria-hidden="true"></i></a>

<script src="https://cdn.jsdelivr.net/npm/bs-custom-file-input/dist/bs-custom-file-input.min.js"></script>
<script>
    bsCustomFileInput.init();
</script>
<script src="{{mix('/js/front.js')}}"></script>
</body>
</html>
