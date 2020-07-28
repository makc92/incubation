"use strict";
var lastScroll = 0;

//check for browser os
var isMobile = false;
var isiPhoneiPad = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true;
}

if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    isiPhoneiPad = true;
}

function SetMegamenuPosition() {
    if ($(window).width() > 991) {
        setTimeout(function () {
            var totalHeight = $('nav.navbar').outerHeight();
            $('.mega-menu').css({top: totalHeight});
            if ($('.navbar-brand-top').length === 0)
                $('.dropdown.simple-dropdown > .dropdown-menu').css({top: totalHeight});
        }, 200);
    } else {
        $('.mega-menu').css('top', '');
        $('.dropdown.simple-dropdown > .dropdown-menu').css('top', '');
    }
}

function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}

function isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        return true;
    } else  // If another browser, return 0
    {
        return false;
    }
}

//page title space
function setPageTitleSpace() {
    if ($('.navbar').hasClass('navbar-top') || $('nav').hasClass('navbar-fixed-top')) {
        if ($('.top-space').length > 0) {
            var top_space_height = $('.navbar').outerHeight();
            if ($('.top-header-area').length > 0) {
                top_space_height = top_space_height + $('.top-header-area').outerHeight();
            }
            $('.top-space').css('margin-top', top_space_height + "px");
        }
    }
}

//swiper button position in auto height slider
function setButtonPosition() {
    if ($(window).width() > 767 && $(".swiper-auto-height-container").length > 0) {
        var leftPosition = parseInt($('.swiper-auto-height-container .swiper-slide').css('padding-left'));
        var bottomPosition = parseInt($('.swiper-auto-height-container .swiper-slide').css('padding-bottom'));
        var bannerWidth = parseInt($('.swiper-auto-height-container .slide-banner').outerWidth());
        $('.navigation-area').css({'left': bannerWidth + leftPosition + 'px', 'bottom': bottomPosition + 'px'});
    } else if ($(".swiper-auto-height-container").length > 0) {
        $('.navigation-area').css({'left': '', 'bottom': ''});
    }
}

$(window).on("scroll", init_scroll_navigate);
function init_scroll_navigate() {

    /*==============================================================
     One Page Main JS - START CODE
     =============================================================*/
    var menu_links = $(".navbar-nav li a");
    var scrollPos = $(document).scrollTop();
    scrollPos = scrollPos + 60;
    menu_links.each(function () {
        var currLink = $(this);
        var hasPos = currLink.attr("href").indexOf("#");
        if (hasPos > -1) {
            var res = currLink.attr("href").substring(hasPos);
            if ($(res).length > 0) {
                var refElement = $(res);
                if (refElement.offset().top <= scrollPos && refElement.offset().top + refElement.height() > scrollPos) {
                    menu_links.not(currLink).removeClass("active");
                    currLink.addClass("active");
                } else {
                    currLink.removeClass("active");
                }
            }
        }
    });

    /*==============================================================*/
    //background color slider Start
    /*==============================================================*/
    var $window = $(window),
            $body = $('.bg-background-fade'),
            $panel = $('.color-code');
    var scroll = $window.scrollTop() + ($window.height() / 2);
    $panel.each(function () {
        var $this = $(this);
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            $body.removeClass(function (index, css) {
                return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
            });
            $body.addClass('color-' + $(this).data('color'));
        }
    });

    /* ===================================
     sticky nav Start
     ====================================== */
    var headerHeight = $('nav').outerHeight();
    if (!$('header').hasClass('no-sticky')) {
        if ($(document).scrollTop() >= headerHeight) {
            $('header').addClass('sticky');

        } else if ($(document).scrollTop() <= headerHeight) {
            $('header').removeClass('sticky');
            setTimeout(function () {
                setPageTitleSpace();
            }, 500);
        }
        SetMegamenuPosition();
    }

    /* ===================================
     header appear on scroll up
     ====================================== */
    var st = $(this).scrollTop();
    if (st > lastScroll) {
        $('.sticky').removeClass('header-appear');
        //  $('.dropdown.on').removeClass('on').removeClass('open').find('.dropdown-menu').fadeOut(100);
    } else
        $('.sticky').addClass('header-appear');
    lastScroll = st;
    if (lastScroll <= headerHeight)
        $('header').removeClass('header-appear');
}

/*==============================================================
 parallax text - START CODE
 ==============================================================*/
function parallax_text() {
    var window_width = $(window).width();
    if (window_width > 1024) {
        if ($('.swiper-auto-slide .swiper-slide').length !== 0) {
            $(document).on("mousemove", ".swiper-auto-slide .swiper-slide", function (e) {
                var positionX = e.clientX;
                var positionY = e.clientY;
                positionX = Math.round(positionX / 10) - 80;
                positionY = Math.round(positionY / 10) - 40;
                $(this).find('.parallax-text').css({'transform': 'translate(' + positionX + 'px,' + positionY + 'px)', 'transition-duration': '0s'});
            });

            $(document).on("mouseout", ".swiper-auto-slide .swiper-slide", function (e) {
                $('.parallax-text').css({'transform': 'translate(0,0)', 'transition-duration': '0.5s'});
            });
        }
    }
}

/*==============================================================*/
//Search - START CODE
/*==============================================================*/
function ScrollStop() {
    return false;
}
function ScrollStart() {
    return true;
}
function validationSearchForm() {
    var error = true;
    $('#search-header input[type=text]').each(function (index) {
        if (index === 0) {
            if ($(this).val() === null || $(this).val() === "") {
                $("#search-header").find("input:eq(" + index + ")").css({"border": "none", "border-bottom": "2px solid red"});
                error = false;
            } else {
                $("#search-header").find("input:eq(" + index + ")").css({"border": "none", "border-bottom": "2px solid #000"});
            }
        }
    });
    return error;
}

/*==============================================================
 //Parallax - START CODE
 ==============================================================*/
/*function stellarParallax() {
    if ($(window).width() > 1024) {
        $.stellar();
    } else {
        $.stellar('destroy');
        $('.parallax').css('background-position', '');
    }
}*/


/*==============================================================
 full screen START CODE
 ==============================================================*/
function fullScreenHeight() {
    var element = $(".full-screen");
    var $minheight = $(window).height();
    element.parents('section').imagesLoaded(function () {
        if ($(".top-space .full-screen").length > 0) {
            var $headerheight = $("header nav.navbar").outerHeight();
            $(".top-space .full-screen").css('min-height', $minheight - $headerheight);
        } else {
            element.css('min-height', $minheight);
        }
    });

    var minwidth = $(window).width();
    $(".full-screen-width").css('min-width', minwidth);

    var sidebarNavHeight = $('.sidebar-nav-style-1').height() - $('.logo-holder').parent().height() - $('.footer-holder').parent().height() - 10;
    $(".sidebar-nav-style-1 .nav").css('height', (sidebarNavHeight));
    var style2NavHeight = parseInt($('.sidebar-part2').height() - parseInt($('.sidebar-part2 .sidebar-middle').css('padding-top')) - parseInt($('.sidebar-part2 .sidebar-middle').css('padding-bottom')) - parseInt($(".sidebar-part2 .sidebar-middle .sidebar-middle-menu .nav").css('margin-bottom')));
    $(".sidebar-part2 .sidebar-middle .sidebar-middle-menu .nav").css('height', (style2NavHeight));


}

function SetResizeContent() {
    //    all function call
    SetMegamenuPosition();
    setPageTitleSpace();
    setButtonPosition();
    parallax_text();
/*    stellarParallax();*/
    fullScreenHeight();
//    navClick();
}

/* ===================================
 START RESIZE
 ====================================== */
$(window).resize(function (event) {
    setTimeout(function () {
        SetResizeContent();
    }, 500);
    $('.menu-back-div').each(function () {
        $(this).attr('style', '');
    });
    $('.navbar-collapse').collapse('hide');

    event.preventDefault();
});

/* ===================================
 START READY
 ====================================== */
$(document).ready(function () {
    "use strict";

    // Active class to current menu for only html
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    var $hash = window.location.hash.substring(1);

    if ($hash) {
        $hash = "#" + $hash;
        pgurl = pgurl.replace($hash, "");
    } else {
        pgurl = pgurl.replace("#", "");
    }

    $(".nav li a").each(function () {
        if ($(this).attr("href") == pgurl || $(this).attr("href") == pgurl + '.html') {
            $(this).parent().addClass("active");
            $(this).parents('li.dropdown').addClass("active");
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150)
            $('.scroll-top-arrow').fadeIn('slow');
        else
            $('.scroll-top-arrow').fadeOut('slow');
    });
    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    /* ===================================
     swiper slider
     ====================================== */
    var swiperFull = new Swiper('.swiper-full-screen', {
        loop: true,
        slidesPerView: 1,
        preventClicks: false,
        allowTouchMove: true,
        pagination: {
            el: '.swiper-full-screen-pagination',
            clickable: true
        },
        autoplay: {
            delay: 5000
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        on: {
            /*resize: function () {
                swiperFull.update();
            }*/
        }
    });

    var swiperAutoFade = new Swiper('.swiper-auto-fade', {
        allowTouchMove: true,
        loop: true,
        slidesPerView: 1,
        preventClicks: false,
        effect: 'fade',
        autoplay: {
            delay: 5000
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-auto-pagination',
            clickable: true
        },
        on: {
            resize: function () {
                swiperAutoFade.update();
            }
        }
    });

    var swiperSecond = new Swiper('.swiper-slider-second', {
        allowTouchMove: true,
        slidesPerView: 1,
        preventClicks: false,
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination-second',
            clickable: true
        },
        on: {
            resize: function () {
                swiperSecond.update();
            }
        }
    });

    var swiperThird = new Swiper('.swiper-slider-third', {
        allowTouchMove: true,
        slidesPerView: 1,
        preventClicks: false,
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination-third',
            clickable: true
        },
        on: {
            resize: function () {
                swiperThird.update();
            }
        }
    });

    var swiperNumber = new Swiper('.swiper-number-pagination', {
        allowTouchMove: true,
        preventClicks: false,
        autoplay: {
            delay: 4000,
            disableOnInteraction: true
        },
        pagination: {
            el: '.swiper-number',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + pad((index + 1)) + '</span>';
            }
        },
        on: {
            resize: function () {
                swiperNumber.update();
            }
        }
    });

    var swiperVerticalPagination = new Swiper('.swiper-vertical-pagination', {
        allowTouchMove: true,
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        preventClicks: false,
        mousewheel: {
            mousewheel: true,
            sensitivity: 1,
            releaseOnEdges: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination-vertical',
            clickable: true
        },
        on: {
            resize: function () {
                swiperVerticalPagination.update();
            }
        }
    });

    var swiperClients = new Swiper('.swiper-slider-clients', {
        allowTouchMove: true,
        slidesPerView: 4,
        paginationClickable: true,
        preventClicks: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true
        },
        pagination: {
            el: null
        },
        breakpoints: {
            1199: {
                slidesPerView: 3
            },
            991: {
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1
            }
        },
        on: {
            resize: function () {
                swiperClients.update();
            }
        }
    });

    var swiperClients2 = new Swiper('.swiper-slider-clients-second', {
        allowTouchMove: true,
        slidesPerView: 4,
        paginationClickable: true,
        preventClicks: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true
        },
        pagination: {
            el: null
        },
        breakpoints: {
            1199: {
                slidesPerView: 3
            },
            991: {
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1
            }
        },
        on: {
            resize: function () {
                swiperClients2.update();
            }
        }
    });

    var swiperThreeSlides = new Swiper('.swiper-three-slides', {
        allowTouchMove: true,
        slidesPerView: 3,
        preventClicks: false,
        pagination: {
            el: '.swiper-pagination-three-slides',
            clickable: true
        },
        autoplay: {
            delay: 3000
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-three-slide-next',
            prevEl: '.swiper-three-slide-prev'
        },
        breakpoints: {
            991: {
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1
            }
        },
        on: {
            resize: function () {
                swiperThreeSlides.update();
            }
        }
    });

    var swiperFourSlides = new Swiper('.swiper-four-slides', {
        allowTouchMove: true,
        slidesPerView: 4,
        preventClicks: false,
        pagination: {
            el: '.swiper-pagination-four-slides',
            clickable: true
        },
        autoplay: {
            delay: 3000
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            1199: {
                slidesPerView: 3
            },
            991: {
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1
            }
        },
        on: {
          /*  resize: function () {
                swiperFourSlides.update();
            }*/
        }
    });

    var swiperDemoHeaderStyle = new Swiper('.swiper-demo-header-style', {
        allowTouchMove: true,
        loop: true,
        slidesPerView: 4,
        preventClicks: true,
        slidesPerGroup: 4,
        pagination: {
            el: '.swiper-pagination-demo-header-style',
            clickable: true
        },
        autoplay: {
            delay: 3000
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            1199: {
                slidesPerGroup: 2,
                slidesPerView: 2
            },
            767: {
                slidesPerGroup: 1,
                slidesPerView: 1
            }
        },
        on: {
            resize: function () {
                swiperDemoHeaderStyle.update();
            }
        }
    });

    var $swiperAutoSlideIndex = 0;
    var swiperAutoSlide = new Swiper('.swiper-auto-slide', {
        allowTouchMove: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 80,
        preventClicks: false,
        observer: true,
        speed: 1000,
        pagination: {
            el: null
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            hide: false,
            snapOnRelease: true
        },
        autoplay: {
            delay: 3000
        },
        mousewheel: {
            invert: false
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-next-style2',
            prevEl: '.swiper-prev-style2'
        },
        breakpoints: {
            1199: {
                spaceBetween: 60
            },
            960: {
                spaceBetween: 30
            },
            767: {
                spaceBetween: 15
            }
        },
        on: {
            resize: function () {
                swiperAutoSlide.update();
            }
        }
    });

    if ($(window).width() > 767) {
        var swiperBottomScrollbarFull = new Swiper('.swiper-bottom-scrollbar-full', {
            allowTouchMove: true,
            slidesPerView: 'auto',
            grabCursor: true,
            preventClicks: false,
            spaceBetween: 30,
            keyboardControl: true,
            speed: 1000,
            pagination: {
                el: null
            },
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                hide: false,
                snapOnRelease: true
            },
            mousewheel: {
                enable: true
            },
            keyboard: {
                enabled: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    }

    var swiperAutoHieght = new Swiper('.swiper-auto-height-container', {
        allowTouchMove: true,
        effect: 'fade',
        loop: true,
        autoHeight: true,
        pagination: {
            el: '.swiper-auto-height-pagination',
            clickable: true
        },
        autoplay: {
            delay: 3000
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        on: {
            resize: function () {
                swiperAutoHieght.update();
            }
        }
    });

    var swiperMultyRow = new Swiper('.swiper-multy-row-container', {
        allowTouchMove: true,
        slidesPerView: 4,
        spaceBetween: 15,
        pagination: {
            el: '.swiper-multy-row-pagination',
            clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: true
        },
        navigation: {
            nextEl: '.swiper-portfolio-next',
            prevEl: '.swiper-portfolio-prev'
        },
        breakpoints: {
            991: {
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1
            }
        },
        on: {
            resize: function () {
                swiperMultyRow.update();
            }
        }
    });

    var swiperBlog = new Swiper('.swiper-blog', {
        allowTouchMove: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 15,
        preventClicks: false,
        loop: true,
        loopedSlides: 3,
        pagination: {
            el: '.swiper-blog-pagination',
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        on: {
            resize: function () {
                swiperBlog.update();
            }
        }
    });

    var swiperPresentation = new Swiper('.swiper-presentation', {
        allowTouchMove: true,
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 30,
        preventClicks: true,
        loop: true,
        loopedSlides: 6,
        pagination: {
            el: '.swiper-presentation-pagination',
            clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: true
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            991: {
                spaceBetween: 15,
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1
            }
        },
        on: {
            resize: function () {
                swiperPresentation.update();
            }
        }
    });

    var resizeId;

    $(window).resize(function () {
        if ($(".swiper-auto-slide").length > 0 && swiperAutoSlide) {
            $swiperAutoSlideIndex = swiperAutoSlide.activeIndex;
            swiperAutoSlide.detachEvents();
            swiperAutoSlide.destroy(true, false);
            swiperAutoSlide = undefined;
            $(".swiper-auto-slide .swiper-wrapper").css("transform", "").css("transition-duration", "");
            $(".swiper-auto-slide .swiper-slide").css("margin-right", "");

            setTimeout(function () {
                swiperAutoSlide = new Swiper('.swiper-auto-slide', {
                    allowTouchMove: true,
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    spaceBetween: 80,
                    preventClicks: false,
                    mousewheelControl: true,
                    observer: true,
                    speed: 1000,
                    pagination: {
                        el: null
                    },
                    scrollbar: {
                        el: '.swiper-scrollbar',
                        draggable: true,
                        hide: false,
                        snapOnRelease: true
                    },
                    autoplay: {
                        delay: 3000
                    },
                    keyboard: {
                        enabled: true
                    },
                    navigation: {
                        nextEl: '.swiper-next-style2',
                        prevEl: '.swiper-prev-style2'
                    },
                    breakpoints: {
                        1199: {
                            spaceBetween: 60
                        },
                        960: {
                            spaceBetween: 30
                        },
                        767: {
                            spaceBetween: 15
                        }
                    },
                    on: {
                        resize: function () {
                            swiperAutoSlide.update();
                        }
                    }
                });

                swiperAutoSlide.slideTo($swiperAutoSlideIndex, 1000, false);
            }, 1000);
        }

        if ($(".swiper-bottom-scrollbar-full").length > 0) {
            clearTimeout(resizeId);
            resizeId = setTimeout(doneResizing, 1000);
        }

        /* update all swiper on window resize */

        setTimeout(function () {
            /*if ($('.swiper-full-screen').length > 0 && swiperFull)
            {
                swiperFull.update();
            }*/

            if ($('.swiper-auto-fade').length > 0 && swiperAutoFade)
            {
                swiperAutoFade.update();
            }

            if ($('.swiper-slider-second').length > 0 && swiperSecond)
            {
                swiperSecond.update();
            }

            if ($('.swiper-slider-third').length > 0 && swiperThird)
            {
                swiperThird.update();
            }

            if ($('.swiper-number-pagination').length > 0 && swiperNumber)
            {
                swiperNumber.update();
            }

            if ($('.swiper-vertical-pagination').length > 0 && swiperVerticalPagination)
            {
                swiperVerticalPagination.update();
            }

            if ($('.swiper-slider-clients').length > 0 && swiperClients)
            {
                swiperClients.update();
            }

            if ($('.swiper-slider-clients-second').length > 0 && swiperClients2)
            {
                swiperClients2.update();
            }

            if ($('.swiper-three-slides').length > 0 && swiperThreeSlides)
            {
                swiperThreeSlides.update();
            }

           /* if ($('.swiper-four-slides').length > 0 && swiperFourSlides)
            {
                swiperFourSlides.update();
            }*/

            if ($('.swiper-demo-header-style').length > 0 && swiperDemoHeaderStyle)
            {
                swiperDemoHeaderStyle.update();
            }

            if ($('.swiper-auto-slide').length > 0 && swiperAutoSlide)
            {
                swiperAutoSlide.update();
            }

            if ($('.swiper-auto-height-container').length > 0 && swiperAutoHieght)
            {
                swiperAutoHieght.update();
            }

            if ($('.swiper-multy-row-container').length > 0 && swiperMultyRow)
            {
                swiperMultyRow.update();
            }

            if ($('.swiper-blog').length > 0 && swiperBlog)
            {
                swiperBlog.update();
            }

            if ($('.swiper-presentation').length > 0 && swiperPresentation)
            {
                swiperPresentation.update();
            }

        }, 500);
        if (isIE()) {
            setTimeout(function () {
                /*if ($('.swiper-full-screen').length > 0 && swiperFull)
                {
                    swiperFull.update();
                }
*/
                if ($('.swiper-auto-fade').length > 0 && swiperAutoFade)
                {
                    swiperAutoFade.update();
                }

                if ($('.swiper-slider-second').length > 0 && swiperSecond)
                {
                    swiperSecond.update();
                }

                if ($('.swiper-slider-third').length > 0 && swiperThird)
                {
                    swiperThird.update();
                }

                if ($('.swiper-number-pagination').length > 0 && swiperNumber)
                {
                    swiperNumber.update();
                }

                if ($('.swiper-vertical-pagination').length > 0 && swiperVerticalPagination)
                {
                    swiperVerticalPagination.update();
                }

                if ($('.swiper-slider-clients').length > 0 && swiperClients)
                {
                    swiperClients.update();
                }

                if ($('.swiper-slider-clients-second').length > 0 && swiperClients2)
                {
                    swiperClients2.update();
                }

                if ($('.swiper-three-slides').length > 0 && swiperThreeSlides)
                {
                    swiperThreeSlides.update();
                }

             /*   if ($('.swiper-four-slides').length > 0 && swiperFourSlides)
                {
                    swiperFourSlides.update();
                }*/

                if ($('.swiper-demo-header-style').length > 0 && swiperDemoHeaderStyle)
                {
                    swiperDemoHeaderStyle.update();
                }

                if ($('.swiper-auto-slide').length > 0 && swiperAutoSlide)
                {
                    swiperAutoSlide.update();
                }

                if ($('.swiper-auto-height-container').length > 0 && swiperAutoHieght)
                {
                    swiperAutoHieght.update();
                }

                if ($('.swiper-multy-row-container').length > 0 && swiperMultyRow)
                {
                    swiperMultyRow.update();
                }

                if ($('.swiper-blog').length > 0 && swiperBlog)
                {
                    swiperBlog.update();
                }

                if ($('.swiper-presentation').length > 0 && swiperPresentation)
                {
                    swiperPresentation.update();
                }

            }, 500);
        }

    });

    function doneResizing() {
        if (swiperBottomScrollbarFull) {
            swiperBottomScrollbarFull.detachEvents();
            swiperBottomScrollbarFull.destroy(true, true);
            swiperBottomScrollbarFull = undefined;
        }

        $(".swiper-bottom-scrollbar-full .swiper-wrapper").css("transform", "").css("transition-duration", "");
        $(".swiper-bottom-scrollbar-full .swiper-slide").css("margin-right", "");
        $('.swiper-bottom-scrollbar-full .swiper-wrapper').removeAttr('style');
        $('.swiper-bottom-scrollbar-full .swiper-slide').removeAttr('style');

        if ($(window).width() > 767) {
            setTimeout(function () {
                swiperBottomScrollbarFull = new Swiper('.swiper-bottom-scrollbar-full', {
                    allowTouchMove: true,
                    slidesPerView: 'auto',
                    grabCursor: true,
                    preventClicks: false,
                    spaceBetween: 30,
                    keyboardControl: true,
                    speed: 1000,
                    pagination: {
                        el: null
                    },
                    scrollbar: {
                        el: '.swiper-scrollbar',
                        draggable: true,
                        hide: false,
                        snapOnRelease: true
                    },
                    mousewheel: {
                        enable: true
                    },
                    keyboard: {
                        enabled: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                });
            }, 500);
        }
    }

    /*==============================================================
     smooth scroll
     ==============================================================*/

    var scrollAnimationTime = 1200, scrollAnimation = 'easeInOutExpo';
    $(document).on('click.smoothscroll', 'a.scrollto', function (event) {
        event.preventDefault();
        var target = this.hash;
        if ($(target).length != 0) {
            $('html, body').stop()
                    .animate({
                        'scrollTop': $(target)
                                .offset()
                                .top
                    }, scrollAnimationTime, scrollAnimation, function () {
                        window.location.hash = target;
                    });
        }
    });

    /*==============================================================
     humburger menu one page navigation
     ==============================================================*/

    if ($('.full-width-pull-menu').length > 0) {
        $(document).on('click', '.full-width-pull-menu .inner-link', function (e) {
            //$('body').removeClass('overflow-hidden position-fixed');
            $(".full-width-pull-menu .close-button-menu").trigger("click");
            var _this = $(this);
            setTimeout(function () {
                var target = _this.attr("href");
                if ($(target).length > 0) {
                    $('html, body').stop()
                            .animate({
                                'scrollTop': $(target).offset().top
                            });
                }
            }, 500);
        });
    }

    // Inner links
    if ($('.navbar-top').length > 0 || $('.navbar-scroll-top').length > 0 || $('.navbar-top-scroll').length > 0) {
        $('.inner-link').smoothScroll({
            speed: 900,
            offset: 0
        });
    } else {
        $('.inner-link').smoothScroll({
            speed: 900,
            offset: -59
        });
    }

    $('.section-link').smoothScroll({
        speed: 900,
        offset: 1
    });

    /*==============================================================*/
    //PieChart For Onepage - START CODE
    /*==============================================================*/
    if ($('.chart1').length > 0) {
        $('.chart1').appear();
        $('.chart1').easyPieChart({
            barColor: '#929292',
            trackColor: '#d9d9d9',
            scaleColor: false,
            easing: 'easeOutBounce',
            scaleLength: 1,
            lineCap: 'round',
            lineWidth: 3, //12
            size: 150, //110
            animate: {
                duration: 2000,
                enabled: true
            },
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $(document.body).on('appear', '.chart1', function (e) {
            // this code is executed for each appeared element
            if (!$(this).hasClass('appear')) {
                $(this).addClass('appear');
                $(this).data('easyPieChart').update(0).update($(this).data('percent'));
            }
        });
    }

    if ($('.chart2').length > 0) {
        $('.chart2').appear();
        $('.chart2').easyPieChart({
            easing: 'easeOutCirc',
            barColor: '#ff214f',
            trackColor: '#c7c7c7',
            scaleColor: false,
            scaleLength: 1,
            lineCap: 'round',
            lineWidth: 2, //12
            size: 120, //110
            animate: {
                duration: 2000,
                enabled: true
            },
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $(document.body).on('appear', '.chart2', function (e) {
            // this code is executed for each appeared element
            if (!$(this).hasClass('appear')) {
                $(this).addClass('appear');
                $(this).data('easyPieChart').update(0).update($(this).data('percent'));
            }
        });
    }

    if ($('.chart3').length > 0) {
        $('.chart3').appear();
        $('.chart3').easyPieChart({
            easing: 'easeOutCirc',
            barColor: '#ff214f',
            trackColor: '',
            scaleColor: false,
            scaleLength: 1,
            lineCap: 'round',
            lineWidth: 3, //12
            size: 140, //110
            animate: {
                duration: 2000,
                enabled: true
            },
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $(document.body).on('appear', '.chart3', function (e) {
            // this code is executed for each appeared element
            if (!$(this).hasClass('appear')) {
                $(this).addClass('appear');
                $(this).data('easyPieChart').update(0).update($(this).data('percent'));
            }
        });
    }


    /*==============================================================
     mega menu width
     ===============================================================*/
    $("ul.mega-menu-full").each(function (idx, elm) {
        var megaMenuWidth = 0;
        $(this).children('li').each(function (idx, elm) {
            var LIheight = 0;
            megaMenuWidth += $(this).outerWidth();
        });
        $(this).width(megaMenuWidth + 95);
        megaMenuWidth = 0;
    });
    /*==============================================================
     form to email
     ==============================================================*/
    $("#success-subscribe-newsletter").hide();
    $("#success-subscribe-newsletter2").hide();
    $("#success-contact-form").hide();
    $("#success-project-contact-form").hide();
    $("#success-contact-form-2").hide();
    $("#success-contact-form-3").hide();
    $("#success-project-contact-form-4").hide();

    //Subscribe newsletter form
    $(document).on("click", '#button-subscribe-newsletter', function () {
        var error = ValidationsubscribenewsletterForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/subscribe-newsletter.php",
                data: $("#subscribenewsletterform").serialize(),
                success: function (result) {
                    // Un-comment below code to redirect user to thank you page.
                    //window.location.href="thank-you.html";

                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    });
                    $("#success-subscribe-newsletter").html(result);
                    $("#success-subscribe-newsletter").fadeIn("slow");
                    $('#success-subscribe-newsletter').delay(4000).fadeOut("slow");
                }
            });
        }
    });

    function ValidationsubscribenewsletterForm() {
        var error = true;
        $('#subscribenewsletterform input[type=text]').each(function (index) {
            if (index == 0) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#subscribenewsletterform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#subscribenewsletterform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }

        });
        return error;
    }

    $(document).on("click", '#button-subscribe-newsletter2', function () {
        var error = ValidationsubscribenewsletterForm2();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/subscribe-newsletter.php",
                data: $("#subscribenewsletterform2").serialize(),
                success: function (result) {
                    // Un-comment below code to redirect user to thank you page.
                    //window.location.href="thank-you.html";

                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    });
                    $("#success-subscribe-newsletter2").html(result);
                    $("#success-subscribe-newsletter2").fadeIn("slow");
                    $('#success-subscribe-newsletter2').delay(4000).fadeOut("slow");


                }
            });
        }
    });

    function ValidationsubscribenewsletterForm2() {
        var error = true;
        $('#subscribenewsletterform2 input[type=text]').each(function (index) {
            if (index == 0) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#subscribenewsletterform2").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#subscribenewsletterform2").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }
        });
        return error;
    }

    //Contact us form
    $(document).on("click", '#contact-us-button', function () {
        var error = ValidationContactForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/contact.php",
                data: $("#contact-form").serialize(),
                success: function (result) {
                    // Un-comment below code to redirect user to thank you page.
                    //window.location.href="thank-you.html";

                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    });
                    $("#success-contact-form").html(result);
                    $("#success-contact-form").fadeIn("slow");
                    $('#success-contact-form').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationContactForm() {
        var error = true;
        $('#contact-form input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#contact-form").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#contact-form").find("input:eq(" + index + ")").removeClass("required-error");
                }
            } else if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#contact-form").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#contact-form").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }

        });
        return error;
    }

    //Contact us form 2
    $('#contact-us-button-2').on("click", function () {
        var error = ValidationContactForm2();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/contact.php",
                data: $("#contact-form-2").serialize(),
                success: function (result) {
                    // Un-comment below code to redirect user to thank you page.
                    //window.location.href="thank-you.html";

                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    });
                    $("#success-contact-form-2").html(result);
                    $("#success-contact-form-2").fadeIn("slow");
                    $('#success-contact-form-2').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationContactForm2() {
        var error = true;
        $('#contact-form-2 input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#contact-form-2").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#contact-form-2").find("input:eq(" + index + ")").removeClass("required-error");
                }
            } else if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#contact-form-2").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#contact-form-2").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }
        });
        return error;
    }

    //Contact us form 3

    $(document).on("click", '#contact-us-button-3', function () {
        var error = ValidationContactForm3();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/contact.php",
                data: $("#contact-form-3").serialize(),
                success: function (result) {
                    // Un-comment below code to redirect user to thank you page.
                    //window.location.href="thank-you.html";
                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    });
                    $("#success-contact-form-3").html(result);
                    $("#success-contact-form-3").fadeIn("slow");
                    $('#success-contact-form-3').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationContactForm3() {
        var error = true;
        $('#contact-form-3 input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#contact-form-3").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#contact-form-3").find("input:eq(" + index + ")").removeClass("required-error");
                }
            } else if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#contact-form-3").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#contact-form-3").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }

        });
        return error;
    }

    //Project Contact us form
    $(document).on("click", '#project-contact-us-button', function (e) {
        e.preventDefault();
        var error = ValidationProjectContactForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/project-contact.php",
                data: $("#project-contact-form").serialize(),
                success: function (result) {
                    // Un-comment below code to redirect user to thank you page.
                    //window.location.href="thank-you.html";

                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    });
                    $("#success-project-contact-form").html(result);
                    $("#success-project-contact-form").fadeIn("slow");
                    $('#success-project-contact-form').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationProjectContactForm() {
        var error = true;
        $('#project-contact-form input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#project-contact-form").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#project-contact-form").find("input:eq(" + index + ")").removeClass("required-error");
                }
            } else if (index == 2) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#project-contact-form").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#project-contact-form").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }

        });
        return error;
    }

    //Project Contact us form 2
    $(document).on("click", '#project-contact-us-4-button', function () {
        var error = ValidationProjectContactForm4();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/project-contact.php",
                data: $("#project-contact-form-4").serialize(),
                success: function (result) {
                    // Un-comment below code to redirect user to thank you page.
                    //window.location.href="thank-you.html";

                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    });
                    $("#success-project-contact-form-4").html(result);
                    $("#success-project-contact-form-4").fadeIn("slow");
                    $('#success-project-contact-form-4').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationProjectContactForm4() {
        var error = true;
        $('#project-contact-form-4 input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#project-contact-form-4").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#project-contact-form-4").find("input:eq(" + index + ")").removeClass("required-error");
                }
            } else if (index == 2) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#project-contact-form-4").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#project-contact-form-4").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }
        });
        return error;
    }

    /*==============================================================
     wow animation - on scroll
     ==============================================================*/
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    $(window).imagesLoaded(function () {
        wow.init();
    });
    /* ===================================
     left nav
     ====================================== */
    $(document).on('click', '.right-menu-button', function (e) {
        $('body').toggleClass('left-nav-on');
    });

    /*==============================================================*/
    //    hamburger menu
    /*==============================================================*/
    $(document).on('click', '.btn-hamburger', function () {
        $('.hamburger-menu').toggleClass('show-menu');
        $('body').removeClass('show-menu');
    });

    /*==============================================================*/
    //sidebar nav open
    /*==============================================================*/
    $(document).on('click', '#mobileToggleSidenav', function () {
        $(this).closest('nav').toggleClass('sidemenu-open');
    });

    /*=================================
     //justified Gallery
     =================================*/
    $(document).imagesLoaded(function () {
        if ($(".justified-gallery").length > 0) {
            $(".justified-gallery").justifiedGallery({
                rowHeight: 400,
                maxRowHeight: false,
                captions: true,
                margins: 10,
                waitThumbnailsLoad: true
            });
        }
    });

    $('.atr-nav').on("click", function () {
        $(".atr-div").append("<a class='close-cross' href='#'>X</a>");
        $(".atr-div").animate({
            width: "toggle"
        });
    });

    $('.close-cross').on("click", function () {
        $(".atr-div").hide();
    });

    var menuRight = document.getElementById('cbp-spmenu-s2'),
            showRightPush = document.getElementById('showRightPush'),
            body = document.body;
    if (showRightPush) {
        showRightPush.onclick = function () {
            classie.toggle(this, 'active');
            if (menuRight)
                classie.toggle(menuRight, 'cbp-spmenu-open');
        };
    }

    var test = document.getElementById('close-pushmenu');
    if (test) {
        test.onclick = function () {
            classie.toggle(this, 'active');
            if (menuRight)
                classie.toggle(menuRight, 'cbp-spmenu-open');
        };
    }

    //blog page header animation
    $(".blog-header-style1 li").hover(function () {
        $('.blog-header-style1 li.blog-column-active').removeClass('blog-column-active');
        $(this).addClass('blog-column-active');
    }, function () {
        $(this).removeClass('blog-column-active');
        $('.blog-header-style1 li:first-child').addClass('blog-column-active');
    });

    /*==============================================================*/
    //big menu open close start
    /*==============================================================*/
    $('.big-menu-open').on("click", function () {
        $('.big-menu-right').addClass("open");
    });

    $('.big-menu-close').on("click", function () {
        $('.big-menu-right').removeClass("open");
    });

    /*==============================================================
     instagramfeed
     ==============================================================*/
    if ($('#instaFeed-style1').length != 0) {
        var instaFeedStyle1 = new Instafeed({
            target: 'instaFeed-style1',
            get: 'user',
            userId: 5640046896,
            limit: '8',
            accessToken: '5640046896.1677ed0.f7cd85767e124a9f9f8d698cb33252a0',
            resolution: "low_resolution",
            error: {
                template: '<div class="col-12"><span class=text-center>No Images Found</span></div>'
            },
            template: '<div class="col-lg-3 col-md-6 instafeed-style1"><a class="insta-link" href="{{link}}" target="_blank"><img src="{{image}}" class="insta-image" /><div class="insta-counts"><span><i class="ti-heart"></i> <span class="count-number">{{likes}}</span></span><span><i class="ti-comment"></i> <span class="count-number">{{comments}}</span></span></div></a></div>'
        });
        instaFeedStyle1.run();
    }

    if ($('#instaFeed-aside').length != 0) {
        var instaFeedAside = new Instafeed({
            target: 'instaFeed-aside',
            get: 'user',
            userId: 5640046896,
            limit: '6',
            accessToken: '5640046896.1677ed0.f7cd85767e124a9f9f8d698cb33252a0',
            resolution: "low_resolution",
            error: {
                template: '<div class="col-12"><span class=text-center>No Images Found</span></div>'
            },
            template: '<li><figure><a href="{{link}}" target="_blank"><img src="{{image}}" class="insta-image" /><span class="insta-counts"><i class="ti-heart"></i>{{likes}}</span></a></figure></li>'
        });
        instaFeedAside.run();
    }

    if ($('#instaFeed-footer').length != 0) {
        var instaFeedFooter = new Instafeed({
            target: 'instaFeed-footer',
            get: 'user',
            userId: 5640046896,
            limit: '6',
            accessToken: '5640046896.1677ed0.f7cd85767e124a9f9f8d698cb33252a0',
            resolution: "low_resolution",
            error: {
                template: '<div class="col-12"><span class=text-center>No Images Found</span></div>'
            },
            template: '<li><figure><a href="{{link}}" target="_blank"><img src="{{image}}" class="insta-image" /><span class="insta-counts"><i class="ti-heart"></i><span>{{likes}}</span></span></a></figure></li>'
        });
        instaFeedFooter.run();
    }


    /*==============================================================*/
    //Set Resize Header Menu - START CODE
    /*==============================================================*/
    $('nav.full-width-pull-menu ul.panel-group li.dropdown a.dropdown-toggle').on("click", function (e) {
        if ($(this).parent('li').find('ul.dropdown-menu').length > 0) {
            if ($(this).parent('li').hasClass('show')) {
                $(this).parent('li').removeClass('show');
            } else {
                $(this).parent('li').addClass('show');
            }
        }
    });

    /*==============================================================*/
    //accordion  - START CODE
    /*==============================================================*/
    $('.accordion-style1 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="ti-minus"></i>');
    });

    $('.accordion-style1 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="ti-plus"></i>');
    });

    $(document).on('click', '.nav.navbar-nav a.inner-link', function (e) {
        $(this).parents('ul.navbar-nav').find('a.inner-link').removeClass('active');
        var $this = $(this);
        $(this).parents('.navbar-collapse').collapse('hide');

        setTimeout(function () {
            $this.addClass('active');
        }, 1000);
    });

    $('.accordion-style2 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title').find('i').addClass('fa-angle-up').removeClass('fa-angle-down');
    });

    $('.accordion-style2 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
    });

    $('.accordion-style3 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title').find('i').addClass('fa-angle-up').removeClass('fa-angle-down');
    });

    $('.accordion-style3 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
    });

    /*==============================================================*/
    //toggles  - START CODE
    /*==============================================================*/
    $('.toggles .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="ti-minus"></i>');
    });

    $('.toggles .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="ti-plus"></i>');
    });

    $('.toggles-style2 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-up"></i>');
    });

    $('.toggles-style2 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fas fa-angle-down"></i>');
    });

    /* ===================================
     blog hover box
     ====================================== */
    $(document).on("mouseenter", ".blog-post-style4 .grid-item", function (e) {
        $(this).find("figcaption .blog-hover-text").slideDown(300);
    });
    $(document).on("mouseleave", ".blog-post-style4 .grid-item", function (e) {
        $(this).find("figcaption .blog-hover-text").slideUp(300);
    });
    SetResizeContent();

    var $allNonRatinaImages = $("img:not([data-rjs])");
    $allNonRatinaImages.attr('data-no-retina', '');

    /*==============================================================*/
    //demo button  - START CODE
    /*==============================================================*/
    /*var $buythemediv = '<div class="buy-theme alt-font md-display-none"><a href="https://themeforest.net/item/pofo-creative-agency-corporate-and-portfolio-multipurpose-template/20645944?ref=themezaa" target="_blank"><i class="ti-shopping-cart"></i><span>Buy Theme</span></a></div><div class="all-demo alt-font md-display-none"><a href="mailto:info@themezaa.com?subject=POFO - Creative Agency, Corporate and Portfolio Multi-purpose Template - Quick Question"><i class="ti-email"></i><span>Quick Question?</span></a></div>';
    $('body').append($buythemediv);*/

    $(document).on("touchstart", ".sidebar-wrapper", function () {
        clearOpen();
    });

    var getNav = $("nav.navbar.bootsnav"), getIn = getNav.find("ul.nav").data("in"), getOut = getNav.find("ul.nav").data("out");
    function clearOpen() {
        $('li.dropdown').removeClass("on").removeClass("show");
        $(".dropdown-menu").stop().fadeOut('fast');
        $(".dropdown-menu").removeClass(getIn);
        $(".dropdown-menu").addClass(getOut);
    }

});
/* ===================================
 END READY
 ====================================== */

/* ===================================
 START Page Load
 ====================================== */
$(document).on('load', function () {
    var hash = window.location.hash.substr(1);
    if (hash != "") {
        setTimeout(function () {
            $(document).imagesLoaded(function () {
                var scrollAnimationTime = 1200,
                        scrollAnimation = 'easeInOutExpo';
                var target = '#' + hash;
                if ($(target).length > 0) {

                    $('html, body').stop()
                            .animate({
                                'scrollTop': $(target).offset().top
                            }, scrollAnimationTime, scrollAnimation, function () {
                                window.location.hash = target;
                            });
                }
            });
        }, 500);
    }

    fullScreenHeight();
});
