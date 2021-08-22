let mix = require('laravel-mix');

mix.setResourceRoot('/assets/');
mix.setPublicPath('public/assets/');

mix.styles([
    'public/assets/AdminLTE/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css',
    'public/assets/AdminLTE/plugins/icheck-bootstrap/icheck-bootstrap.min.css',
    'public/assets/AdminLTE/plugins/jqvmap/jqvmap.min.css',
    'public/assets/AdminLTE/dist/css/adminlte.min.css',
    'public/assets/AdminLTE/plugins/overlayScrollbars/css/OverlayScrollbars.min.css',
    'public/assets/AdminLTE/plugins/daterangepicker/daterangepicker.css',
    'public/assets/AdminLTE/plugins/summernote/summernote-bs4.min.css'
], 'public/assets/css/admin.css')

mix.sass('resources/assets/scss/app.scss', 'public/assets/css')
    .js('resources/assets/js/app.js', 'public/assets/js')
    .copyDirectory('resources/assets/img', 'public/assets/img');