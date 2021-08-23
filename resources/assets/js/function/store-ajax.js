function storeAjax(url, datanya) {
    $.ajax({
        type: "POST",
        url: url,
        data: datanya,
        dataType: "json",
        encode: true,
    }).done(function (data) {
        console.log(data);
    });
}

export {storeAjax}