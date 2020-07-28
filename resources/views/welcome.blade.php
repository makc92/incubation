<!doctype html>
<html class="no-js" lang="en">
<head>
    <!-- title -->
    <title>{{$university}} - Инкубационный центр</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1"/>
    <meta name="author" content="ThemeZaa">
    <!-- description -->
    <meta name="description"
          content="POFO is a highly creative, modern, visually stunning and Bootstrap responsive multipurpose agency and portfolio HTML5 template with 25 ready home page demos.">
    <!-- keywords -->
    <meta name="keywords"
          content="creative, modern, clean, bootstrap responsive, html5, css3, portfolio, blog, agency, templates, multipurpose, one page, corporate, start-up, studio, branding, designer, freelancer, carousel, parallax, photography, personal, masonry, grid, coming soon, faq">
    <!-- favicon -->
    <link rel="shortcut icon" href="images/favicon.ico">
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
                        @foreach (config('app.languages') as $locale)
                            <a href="{{ route('home', $locale) }}"
                               @if (app()->getLocale() == $locale) style="font-weight: bold; text-decoration: underline"
                               @endif class="text-link-white-2">{{ strtoupper($locale) }}</a>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
    <nav
        class="navbar navbar-default bootsnav bg-transparent navbar-brand-top nav-box-width navbar-expand-lg on no-full">
        <div class="container nav-header-container  text-center flex-wrap">
            <div class="col col-lg-12 mr-0 d-flex justify-content-lg-between align-items-center">
                <a href="/" class="navbar-brand p-0">
                    <img src="{{asset('/images/logo.png')}}" class="default" alt="Pofo" width="100"
                         height="100">
                </a>
                <a href="/" title="Pofo" class="navbar-brand p-0">
                    {{$university}}
                </a>
                <a href="https://it-park.uz/" target="_blank" class="navbar-brand p-0">
                    <img src="{{asset('/images/it-park-logo.svg')}}" class="default" alt="Pofo" width="100"
                         height="100">
                </a>
            </div>
            <div class="col-auto col-lg accordion-menu pr-lg-0">
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
</header>
<section class="wow fadeIn py-0 top-space">
    <div class="container-fluid p-0">
        <div
            class="swiper-full-screen swiper-container height-100 width-100 white-move swiper-container-initialized swiper-container-horizontal">
            <div class="swiper-wrapper" style="transform: translate3d(-3806px, 0px, 0px); transition-duration: 0ms;">
                <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="2"
                     style="width: 1903px;">
                    <div class="container-fluid p-0">
                        <div class="col-lg-12 p-0 text-center">
                            <img src="http://placehold.it/1920x800" class="width-100" alt="" data-no-retina="">
                        </div>
                    </div>
                </div>
                @foreach($sliders as $slider)
                <div class="swiper-slide swiper-slide-next" data-swiper-slide-index="2" style="width: 1903px;">
                    <div class="container-fluid p-0">
                        <div class="col-lg-12 p-0 text-center">
                            <img src="{{$slider->thumbnail ? $slider->getImagePath('thumbnail') : asset('./images/news.png') }}" class="width-100" style="max-height:800px" alt="" data-no-retina="">
                        </div>
                    </div>
                </div>
                @endforeach
                <!-- end slider item -->
                <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="0"
                     style="width: 1903px;">
                    <div class="container-fluid p-0">
                        <div class="col-lg-12 p-0 text-center">
                            <img src="http://placehold.it/1920x800" class="width-100" alt="" data-no-retina="">
                        </div>
                    </div>
                </div>
            </div>
            <!-- start pagination -->
            <div
                class="swiper-pagination swiper-pagination-white swiper-full-screen-pagination swiper-pagination-clickable swiper-pagination-bullets">
                <span class="swiper-pagination-bullet" tabindex="0" role="button"
                      aria-label="Go to slide 1"></span><span
                    class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button"
                    aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet" tabindex="0" role="button"
                                                            aria-label="Go to slide 3"></span></div>
            <div class="swiper-button-next swiper-button-black-highlight" tabindex="0" role="button"
                 aria-label="Next slide"></div>
            <div class="swiper-button-prev swiper-button-black-highlight" tabindex="0" role="button"
                 aria-label="Previous slide"></div>
            <!-- end pagination -->
            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
    </div>
</section>
<section class="bg-extra-dark-gray wow fadeIn" id="about">
    <div class="container">
        <div class="row align-items-center justify-content-between">
            <div class="col-12 col-lg-4 wow fadeInLeft">
                <h5 class="alt-font text-light-gray margin-30px-bottom">{{__('menu.about')}}</h5>
                <p class="text-light-gray">{{$info->about[app()->getLocale()]}}</p>
            </div>
            <div class="col-12 col-lg-7 lg-margin-50px-bottom wow fadeInRight text-light-gray">
                <h5 class="alt-font text-light-gray margin-30px-bottom">{{__('menu.services')}}</h5>
                <p>{!! $info->services[app()->getLocale()]  !!}</p>
            </div>
        </div>
    </div>
</section>

<section class="wow fadeIn" id="programs">
    <div class="container">
        <div class="row justify-content-center">
            <div
                class="col-12 col-xl-7 col-lg-8 col-md-6 margin-eight-bottom md-margin-40px-bottom sm-margin-30px-bottom text-center">
                <h5 class="alt-font text-extra-dark-gray font-weight-600 mb-0">{{__('menu.program')}}</h5>
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col-12 col-lg-5 text-center md-margin-30px-bottom wow fadeInLeft">
                <img src="http://placehold.it/900x650" alt="" class="border-radius-6 w-100">
            </div>
            <div
                class="col-12 col-lg-7 padding-eight-lr text-center text-lg-left lg-padding-nine-right md-padding-15px-lr wow fadeInRight"
                data-wow-delay="0.2s">
                <h6 class="alt-font text-extra-dark-gray">{{__('menu.incubation')}}</h6>
                <p>{{__('info.incubation')}}</p>
                <a href="{{route('startup' , app()->getLocale())}}"
                   class="btn btn-dark-gray btn-small text-extra-small btn-rounded margin-5px-top"><i
                        class="fas fa-play-circle icon-very-small margin-5px-right no-margin-left"
                        aria-hidden="true"></i> Регистрация</a>
            </div>
        </div>
        <div class="divider-full bg-extra-light-gray margin-seven-bottom margin-eight-top"></div>
        <div class="row align-items-center">
            <div
                class="col-12 col-lg-7 padding-eight-lr text-center text-lg-left lg-padding-nine-right md-padding-15px-lr wow fadeInLeft"
                data-wow-delay="0.2s">
                <h6 class="alt-font text-extra-dark-gray">{{__('menu.acceleration')}}</h6>
                <p>{{__('info.acceleration')}}</p>
                <a href="{{route('startup' , app()->getLocale())}}"
                   class="btn btn-dark-gray btn-small text-extra-small btn-rounded margin-5px-top"><i
                        class="fas fa-play-circle icon-very-small margin-5px-right no-margin-left"
                        aria-hidden="true"></i> Регистрация</a>
            </div>
            <div class="col-12 col-lg-5 text-center md-margin-30px-bottom wow  fadeInRight">
                <img src="http://placehold.it/900x650" alt="" class="border-radius-6 w-100">
            </div>
        </div>
    </div>
</section>

<section class="wow fadeIn bg-light-gray" id="events">
    <div class="container">
        <div class="row justify-content-center">
            <div
                class="col-12 col-xl-7 col-lg-8 col-md-6 margin-eight-bottom md-margin-40px-bottom sm-margin-30px-bottom text-center">
                <h5 class="alt-font text-extra-dark-gray font-weight-600 mb-0">{{__('menu.events')}}</h5>
            </div>
        </div>
        <div class="row position-relative">
            <div class="swiper-container black-move blog-slider swiper-four-slides swiper-pagination-bottom">
                <div class="swiper-wrapper">
                @foreach($events as $event)
                    <!-- start post item -->
                        <div class="swiper-slide col-12 col-lg-3 col-md-6 margin-50px-bottom last-paragraph-no-margin sm-margin-30px-bottom wow fadeInUp">
                            <div class="blog-post blog-post-style1 text-center text-md-left">
                                <div class="blog-post-images overflow-hidden margin-25px-bottom md-margin-20px-bottom">
                                    <a href="{{route('event.show',[app()->getLocale(),$event->slug] )}}">
                                        <img
                                            src="{{$event->thumbnail ? $event->getImagePath('thumbnail') : asset('./images/event.jpg') }}"
                                            alt="">
                                    </a>
                                </div>
                                <div class="post-details">
                                    <span
                                        class="post-author text-extra-small text-medium-gray text-uppercase d-block margin-10px-bottom sm-margin-5px-bottom">{{$event->created_at}}</span>
                                    <a href="{{route('event.show',[app()->getLocale(),$event->slug] )}}"
                                       class="post-title text-medium text-extra-dark-gray width-90 d-block md-width-100">{{$event->title}}</a>
                                </div>
                            </div>
                        </div>
                        <!-- end post item -->
                    @endforeach
                </div>
                <div class="swiper-pagination swiper-pagination-four-slides"></div>
            </div>

        </div>
    </div>
</section>

<section class="wow fadeIn" id="mentors">
    <div class="container">
        <div class="row justify-content-center">
            <div
                class="col-12 col-xl-7 col-lg-8 col-md-6 margin-eight-bottom md-margin-40px-bottom sm-margin-30px-bottom text-center">
                <h5 class="alt-font text-extra-dark-gray font-weight-600 mb-0">{{__('menu.mentor')}}</h5>
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col-12 col-lg-5 text-center md-margin-30px-bottom wow fadeInLeft">
                <img src="http://placehold.it/900x650" alt="" class="border-radius-6 w-100">
            </div>
            <div
                class="col-12 col-lg-7 padding-eight-lr text-center text-lg-left lg-padding-nine-right md-padding-15px-lr wow fadeInRight"
                data-wow-delay="0.2s">
                <p>{{__('info.mentoring')}}</p>
                <a href="{{route('mentor' , app()->getLocale())}}"
                   class="btn btn-dark-gray btn-small text-extra-small btn-rounded margin-5px-top"><i
                        class="fas fa-play-circle icon-very-small margin-5px-right no-margin-left"
                        aria-hidden="true"></i> Подать заявку</a>
            </div>
        </div>
    </div>
</section>

<section class="wow fadeIn" id="trackers">
    <div class="container">
        <div class="row justify-content-center">
            <div
                class="col-12 col-xl-7 col-lg-8 col-md-6 margin-eight-bottom md-margin-40px-bottom sm-margin-30px-bottom text-center">
                <h5 class="alt-font text-extra-dark-gray font-weight-600 mb-0">{{__('menu.tracker')}}</h5>
            </div>
        </div>
        <div class="row align-items-center">
            <div
                class="col-12 col-lg-7 padding-eight-lr text-center text-lg-left lg-padding-nine-right md-padding-15px-lr wow fadeInLeft "
                data-wow-delay="0.2s">
                <p>{{__('info.tracking')}}</p>
                <a href="{{route('tracker' , app()->getLocale())}}"
                   class="btn btn-dark-gray btn-small text-extra-small btn-rounded margin-5px-top"><i
                        class="fas fa-play-circle icon-very-small margin-5px-right no-margin-left"
                        aria-hidden="true"></i> Подать заявку</a>
            </div>
            <div class="col-12 col-lg-5 text-center md-margin-30px-bottom wow fadeInRight">
                <img src="http://placehold.it/900x650" alt="" class="border-radius-6 w-100">
            </div>
        </div>
    </div>
</section>

<section class="wow fadeIn bg-light-gray" id="news">
    <div class="container">
        <div class="row justify-content-center">
            <div
                class="col-12 col-xl-7 col-lg-8 col-md-6 margin-eight-bottom md-margin-40px-bottom sm-margin-30px-bottom text-center">
                <h5 class="alt-font text-extra-dark-gray font-weight-600 mb-0">{{__('menu.news')}}</h5>
            </div>
        </div>
        <div class="row position-relative">
            <div class="swiper-container black-move blog-slider swiper-four-slides swiper-pagination-bottom">
                <div class="swiper-wrapper">
                @foreach($news as $news_item)
                    <!-- start post item -->
                        <div class="swiper-slide  col-12 col-lg-3 col-md-6 margin-50px-bottom last-paragraph-no-margin sm-margin-30px-bottom wow fadeInUp">
                            <div class="blog-post blog-post-style1 text-center text-md-left">
                                <div class="blog-post-images overflow-hidden margin-25px-bottom md-margin-20px-bottom">
                                    <a href="{{route('news.show',[app()->getLocale(),$news_item->translate(app()->getLocale())->slug] )}}">
                                        <img
                                            src="{{$news_item->thumbnail ? $news_item->getImagePath('thumbnail') : asset('./images/news.png') }}"
                                            alt="">
                                    </a>
                                </div>
                                <div class="post-details">
                            <span
                                class="post-author text-extra-small text-medium-gray text-uppercase d-block margin-10px-bottom sm-margin-5px-bottom">{{$news_item->created_at}}</span>
                                    <a href="{{route('news.show',[app()->getLocale(),$news_item->translate(app()->getLocale())->slug] )}}"
                                       class="post-title text-medium text-extra-dark-gray width-90 d-block md-width-100">{{$news_item->translate(app()->getLocale())->title}}</a>
                                </div>
                            </div>
                        </div>
                        <!-- end post item -->
                    @endforeach
                </div>
                <div class="swiper-pagination swiper-pagination-four-slides"></div>
            </div>


        </div>
    </div>
</section>

<footer class="footer-strip-dark bg-extra-dark-gray padding-50px-tb sm-padding-30px-tb" id="contacts">
    <div class="container">
        <div class="row align-items-center">
            <!-- start logo -->
            <div class="col-md-3 text-center text-lg-left sm-margin-20px-bottom">
                <p class="mb-0">{{$info->contact}}</p>
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
<!-- end scroll to top  -->
<script src="{{mix('/js/front.js')}}"></script>
</body>
</html>
