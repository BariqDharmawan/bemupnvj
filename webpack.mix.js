let mix = require('laravel-mix');

mix.setResourceRoot('/assets/');
mix.setPublicPath('public');

mix.sass('resources/assets/scss/app.scss', 'public/assets/css')
    .js('resources/assets/js/app.js', 'public/assets/js')
    .js('resources/assets/js/admin.js', 'public/assets/js')
    .copyDirectory('resources/assets/img', 'public/assets/img')
    .copyDirectory('resources/assets/vendors/AdminLTE', 'public/assets/vendors/AdminLTE')
    .copyDirectory('resources/assets/vendors/dropzone', 'public/assets/vendors/dropzone');

mix.styles([
    'resources/assets/vendors/AdminLTE/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css',
    'resources/assets/vendors/AdminLTE/plugins/icheck-bootstrap/icheck-bootstrap.min.css',
    'resources/assets/vendors/AdminLTE/plugins/jqvmap/jqvmap.min.css',
    'resources/assets/vendors/AdminLTE/dist/css/adminlte.min.css',
    'resources/assets/vendors/AdminLTE/plugins/overlayScrollbars/css/OverlayScrollbars.min.css',
    'resources/assets/vendors/AdminLTE/plugins/daterangepicker/daterangepicker.css',
    'resources/assets/vendors/AdminLTE/plugins/summernote/summernote-bs4.min.css',
    'resources/assets/vendors/AdminLTE/plugins/toastr/toastr.min.css',
    'resources/assets/vendors/dropzone/dropzone.min.css'
], 'public/assets/css/admin.css')
