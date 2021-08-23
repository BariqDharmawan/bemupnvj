function deleteAjax(url) {
    $.ajax({
        type: 'DELETE',
        url: url,
        contentType: 'application/json; charset=utf-8',
        success: function () {
            console.log('success')
        },
        error: function (data) {
            console.log("fail");
        }
    })
}

export {deleteAjax}