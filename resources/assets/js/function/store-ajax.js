import { showToastr } from "./toastr";

function storeAjax(url, datanya, formEl = null) {
    $.ajax({
        type: "POST",
        url: url,
        data: datanya,
        dataType: "json",
        encode: true,
    }).done(function (data) {
        console.log(data);
        showToastr('success', data.message)

        if (formEl) {
            formEl.parents('.modal').modal('hide')
            formEl.find('[class*="-error-message"]').text('')
        }

    }).fail(function (xhr, status, error) {
        const allErrorMessage = JSON.parse(xhr.responseText)

        $.each(allErrorMessage, function (name, val) {
            const jsonResponseStatus = JSON.parse(JSON.stringify(val));
            $.each(jsonResponseStatus, function(name2, val2) {
                const errorMessage = val2.message
                const field = val2.field

                $(`.${field}-error-message`).text(errorMessage)
                console.log(field, errorMessage)
            });
        })
    })
}

export {storeAjax}