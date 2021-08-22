//ajax delete banner on page /primary-cover
Dropzone.autoDiscover = false;
$(function () {
    const csrfToken = $('meta[name="csrf-token"]').attr('content')
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': csrfToken
        }
    });

    const myDropzone = new Dropzone('.dropzone', {
        maxFilesize: 20, //20mb
        acceptedFiles: ".jpeg,.jpg,.png,.pdf",
        headers: {
            'X-CSRF-TOKEN': csrfToken
        }
    })

    function deleteOldBanner(oldBannerId) {
        $.ajax({
            type: 'DELETE',
            url: '/primary-cover/' + oldBannerId,
            contentType: 'application/json; charset=utf-8',
            success: function () {
                console.log('success')
            },
            error: function (data) {
                console.log("fail");
            }
        })
    }

    function getNewBanner() {
        $.ajax({
            type: "GET",
            url: '/api/primary-cover',
            dataType: 'json',
            cache: false,
            success: function (data) {
                $("#primary-cover").attr('src', data.filename)
                $(".dropzone").attr('data-old-banner-id', data.id)
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    function showToastr(type, message) {
        switch (type) {
            case 'success':
                toastr.success(message)
                break;

            case 'info':
                toastr.info(message)
                break;

            case 'error':
                toastr.error(message)
                break;

            case 'warning':
                toastr.warning(message)
                break;
        }

        toastr.options.closeButton = true;
        toastr.options.closeDuration = 150
        toastr.options.timeOut = 5
        toastr.options.extendedTimeOut = 3
    }

    let getOldBannerId;
    myDropzone.on('success', function () {
        getOldBannerId = $(this)[0]['element']['dataset']['oldBannerId']
        deleteOldBanner(getOldBannerId)
        getNewBanner()

        showToastr('success', 'Berhasil upload banner')

    })

    myDropzone.on('complete', function (file) {
        myDropzone.removeFile(file)

    })
})