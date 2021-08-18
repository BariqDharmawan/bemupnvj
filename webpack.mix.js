let mix = require('laravel-mix');

mix.setResourceRoot('/assets/');
mix.setPublicPath('public/assets/');

mix.sass('resources/assets/scss/admin.scss', 'css')
    .js('resources/assets/js/admin.js', 'js')

mix.sass('resources/assets/scss/app.scss', 'public/assets/css')
    .js('resources/assets/js/app.js', 'public/assets/js')
    .copyDirectory('resources/assets/img', 'public/assets/img');