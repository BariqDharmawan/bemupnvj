import { activeTab, activeTabName } from "../component/tabs";
import { deactiveSiblings } from "./switch-tab";

function getNewBanner() {
    $.ajax({
        type: "GET",
        url: '/api/primary-cover',
        dataType: 'json',
        cache: false,
        success: function (data) {
            console.log('get new banner', data.primaryCoverToJson)
            $("#primary-cover").attr('src', data.primaryCoverToJson.filename)
            $(".dropzone").attr('data-old-banner-id', data.primaryCoverToJson.id)
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
    $("#list-social-media").load('/our-contact/manage #list-social-media', function (response, status, xhr) {
        if (status == 'error') {
            console.log(xhr.status + " " + xhr.statusText)
        }
        else if (status == 'success') {
            console.log('get current social media success')
        }
    })
}

function getAddress() {
    $("#list-address").load('/our-contact/manage #list-address', function (response, status, xhr) {
        if (status == 'error') {
            console.error(xhr.status + " " + xhr.statusText)
        }
        else if (status == 'success') {
            console.info('get current address')
        }
    })
}

function getContact() {
    $("#list-contact").load('/our-contact/manage #list-contact', function (
        response, status, xhr
    ) {
        if (status == 'error') {
            console.error(xhr.status + " " + xhr.statusText)
        }
        else if (status == 'success') {
            console.info('get current address')
        }
    })
}

function getArticle() {
    $("main.content").load('/blog/manage main.content .container-fluid', function (
        response, status, xhr
    ) {
        if (status == 'error') {
            console.error(xhr.status + " " + xhr.statusText)
        }
        else if (status == 'success') {
            console.info('get current articles')
        }
    })
}

export {getNewBanner, getMission, getSocialMedia, getAddress, getContact, getArticle}