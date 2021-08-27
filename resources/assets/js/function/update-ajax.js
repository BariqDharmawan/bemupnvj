import { showToastr } from "./toastr";

export function updateAjax(url, datanya) {
    $.ajax({
        type: "PUT",
        url: url,
        data: datanya,
        dataType: "json",
        encode: true,
    }).done(function (response) {
        console.log(response);
        if (response.isDirty) {
            showToastr('success', response.message)
        }
    }).fail(function (error) {
        console.log(error)
    })
}