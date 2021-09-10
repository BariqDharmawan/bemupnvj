let mix = require('laravel-mix');

require('laravel-mix-serve');

mix.setResourceRoot('/assets/');
mix.setPublicPath('public');

mix.sass('resources/assets/scss/app.scss', 'public/assets/css')
    .js('resources/assets/js/app.js', 'public/assets/js')
    .js('resources/assets/js/admin.js', 'public/assets/js')
    .copyDirectory('resources/assets/img', 'public/assets/img')
    .copyDirectory('resources/assets/vendors', 'public/assets/vendors')
    .copyDirectory('resources/assets/video', 'public/assets/video')

mix.styles([
    'resources/assets/vendors/AdminLTE/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css',
    'resources/assets/vendors/AdminLTE/plugins/icheck-bootstrap/icheck-bootstrap.min.css',
    'resources/assets/vendors/AdminLTE/plugins/jqvmap/jqvmap.min.css',
    'resources/assets/vendors/AdminLTE/dist/css/adminlte.min.css',
    'resources/assets/vendors/AdminLTE/plugins/overlayScrollbars/css/OverlayScrollbars.min.css',
    'resources/assets/vendors/AdminLTE/plugins/daterangepicker/daterangepicker.css',
    'resources/assets/vendors/AdminLTE/plugins/summernote/summernote-bs4.min.css',
    'resources/assets/vendors/AdminLTE/plugins/toastr/toastr.min.css',
    'resources/assets/vendors/dropzone/dropzone.min.css',
    'resources/assets/vendors/select2/css/select2.min.css',
    'resources/assets/vendors/select2/select2-bootstrap4-theme/select2-bootstrap4.css',
    'resources/assets/custom-admin.css'
], 'public/assets/css/admin.css');

mix.serve('node ace serve --watch');