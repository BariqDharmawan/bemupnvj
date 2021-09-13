const fslightbox = require('fslightbox')
const Swal = require('sweetalert2')
const axios = require('axios').default
const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

axios.create({
    headers: {
        'X-CSRF-TOKEN': csrfToken
    }
})

export {axios, Swal}