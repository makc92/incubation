const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

/*
mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
*/

mix.styles([
    'resources/assets/css/animate.css',
    'resources/assets/css/bootstrap.min.css',
    'resources/assets/css/font-awesome.css',
    'resources/assets/css/swiper.min.css',
    'resources/assets/css/style.css',
    'resources/assets/css/responsive.css',
], 'public/css/main.css').version();

mix.scripts([
    'resources/assets/js/jquery.js',
    'resources/assets/js/modernizr.js',
    'resources/assets/js/bootstrap.bundle.js',
    'resources/assets/js/jquery.easing.1.3.js',
    'resources/assets/js/lazyload.min.js',
    'resources/assets/js/skrollr.min.js',
    'resources/assets/js/smooth-scroll.js',
    'resources/assets/js/jquery.appear.js',
    'resources/assets/js/bootsnav.js',
    'resources/assets/js/jquery.nav.js',
    'resources/assets/js/wow.min.js',
    'resources/assets/js/page-scroll.js',
    'resources/assets/js/swiper.min.js',
    'resources/assets/js/imagesloaded.pkgd.min.js',
    'resources/assets/js/bs-custom-file-input.min.js',
    'resources/assets/js/retina.min.js',
    'resources/assets/js/particles.js',
    'resources/assets/js/main.js',
], 'public/js/front.js').version();

mix.copy('resources/assets/webfonts', 'public/webfonts');
mix.copy('resources/assets/images', 'public/images');
