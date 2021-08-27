import { showToastr } from "./toastr";

function deleteAjax(url) {
    $.ajax({
        type: 'DELETE',
        url: url,
        contentType: 'application/json; charset=utf-8',
    }).done(function (data) {
        console.log('success')
        if (data.message) {
            showToastr('success', data.message)
        }
    }).fail(function (error) {
        console.log(error)
    })
}

export {deleteAjax}