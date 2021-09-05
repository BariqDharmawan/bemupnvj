import { deleteAjax } from "./../function/delete-ajax";
import { getNewBanner } from "./../function/get-ajax";
import * as Global from "./../function/global";
import { showToastr } from "./../function/toastr";

//ajax delete banner on page /primary-cover
if (document.querySelectorAll('.dropzone').length > 0 ||
    document.querySelectorAll('.dropzone-inside-form')) {
    Dropzone.autoDiscover = false;
}

// $(function () {

//change primary cover using dropzone
if (document.querySelectorAll('.dropzone-single').length > 0) {
    const myDropzone = new Dropzone('.dropzone-single', {
        maxFilesize: 20, //20mb
        acceptedFiles: ".jpeg,.jpg,.png,.pdf",
        headers: {
            'X-CSRF-TOKEN': Global.csrfToken
        }
    })

    let getOldBannerId;
    myDropzone.on('success', function (file, response) {
        getOldBannerId = $(this)[0]['element']['dataset']['oldBannerId']
        deleteAjax(`/primary-cover/${getOldBannerId}`)
        getNewBanner()
        showToastr('success', response.message)
    })

    myDropzone.on('complete', function (file) {
        myDropzone.removeFile(file)
    })
}

if (document.querySelectorAll('.dropzone-inside-form').length > 0) {
    document.querySelectorAll('.dropzone-inside-form').forEach(formWithDropzone => {
        const form = formWithDropzone.closest('form')
        const dropzoneInsideForm = new Dropzone('.dropzone-inside-form', {
            url: form.action,
            paramName: formWithDropzone.dataset.name || 'file',
            maxFilesize: 20, //20mb
            acceptedFiles: ".jpeg,.jpg,.png,.pdf",
            autoProcessQueue: false,
            headers: {
                'X-CSRF-TOKEN': Global.csrfToken
            }
        })
        formWithDropzone.closest('form').addEventListener('submit', function (e) {
            e.preventDefault()
            console.log(new FormData(this))
            dropzoneInsideForm.processQueue()
        })
        dropzoneInsideForm.on('error', (file, error) => console.error(error))
    })

}


// })