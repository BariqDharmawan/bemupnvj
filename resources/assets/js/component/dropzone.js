import { deleteAjax } from "./../function/delete-ajax";
import { getNewBanner } from "./../function/get-ajax";
import * as Global from "./../function/global";
import { showToastr } from "./../function/toastr";

//ajax delete banner on page /primary-cover
if (document.querySelectorAll('.dropzone').length > 0) {
    Dropzone.autoDiscover = false;
}

$(function () {

    //change primary cover using dropzone
    if (document.querySelector('#change-primary-cover')) {
        const myDropzone = new Dropzone('.dropzone', {
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
})