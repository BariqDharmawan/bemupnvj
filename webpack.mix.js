let mix = require('laravel-mix');
const mixManifest = 'public/assets/manifest.json';
const jsonfile = require('jsonfile');

require('laravel-mix-serve');

// mix.setResourceRoot('/assets/');
mix.setPublicPath('public/assets');

mix.sass('resources/assets/scss/app.scss', 'public/assets/css')
    .js('resources/assets/js/app.js', 'public/assets/js')
    .js('resources/assets/js/admin.js', 'public/assets/js')
    .copy('resources/assets/img', 'public/assets/img')
    .copy('resources/assets/vendors', 'public/assets/vendors')
    .copy('resources/assets/video', 'public/assets/video')
    .copy('resources/assets/img/content/dummy/uploads', 'public/uploads/contact/')
    .copy('resources/assets/file/dummy', 'public/uploads/file/')

mix.styles([
    'resources/assets/vendors/AdminLTE/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css',
    'resources/assets/vendors/AdminLTE/plugins/icheck-bootstrap/icheck-bootstrap.min.css',
    'resources/assets/vendors/AdminLTE/plugins/jqvmap/jqvmap.min.css',
    'resources/assets/vendors/AdminLTE/dist/css/adminlte.min.css',
    'resources/assets/vendors/AdminLTE/plugins/overlayScrollbars/css/OverlayScrollbars.min.css',
    'resources/assets/vendors/AdminLTE/plugins/daterangepicker/daterangepicker.css',
    'resources/assets/vendors/summernote/summernote-bs4.min.css',
    'resources/assets/vendors/AdminLTE/plugins/toastr/toastr.min.css',
    'resources/assets/vendors/dropzone/dropzone.min.css',
    'resources/assets/vendors/select2/css/select2.min.css',
    'resources/assets/vendors/select2/select2-bootstrap4-theme/select2-bootstrap4.css',
    'resources/assets/custom-admin.css'
], 'public/assets/css/admin.css')
