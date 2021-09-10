require('fslightbox')

const axios = require('axios').default
const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

axios.create({
    headers: {
        'X-CSRF-TOKEN': csrfToken
    }
})

export {axios}