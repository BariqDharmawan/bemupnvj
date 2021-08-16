let mix = require('laravel-mix');
require('laravel-mix-serve');

mix.browserSync('localhost:3333')
    .setPublicPath('public')
    .serve('node ace serve --watch')