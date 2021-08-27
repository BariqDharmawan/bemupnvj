import { showToastr } from "./toastr";

function storeAjax(url, datanya) {
    $.ajax({
        type: "POST",
        url: url,
        data: datanya,
        dataType: "json",
        encode: true,
    }).done(function (data) {
        console.log(data);
        showToastr('success', data.message)
    }).fail(function (error) {
        console.log(error)
    })
}

export {storeAjax}