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

function getMission() {
    $("#list-missions").load('/about-us/vision-mission #list-missions', function (response, status, xhr) {
        if (status == 'error') {
            console.log(xhr.status + " " + xhr.statusText)
        }
        else if (status == 'success') {
            console.log('get current mission success')
        }
    })
}

function getSocialMedia() {
    $("#list-social-media").load('/contact-us/manage #list-social-media', function (response, status, xhr) {
        if (status == 'error') {
            console.log(xhr.status + " " + xhr.statusText)
        }
        else if (status == 'success') {
            console.log('get current social media success')
        }
    })
}

function getAddress() {
    $("#list-address").load('/contact-us/manage #list-address', function (response, status, xhr) {
        if (status == 'error') {
            console.error(xhr.status + " " + xhr.statusText)
        }
        else if (status == 'success') {
            console.info('get current address')
        }
    })
}

function getContact() {
    $("#list-contact").load('/contact-us/manage #list-contact', function (response, status, xhr) {
        if (status == 'error') {
            console.error(xhr.status + " " + xhr.statusText)
        }
        else if (status == 'success') {
            console.info('get current address')
        }
    })
}

export {getNewBanner, getMission, getSocialMedia, getAddress, getContact}