import { deleteAjax } from "../function/delete-ajax"
import { getMission, getSocialMedia } from "../function/get-ajax";
import { storeAjax } from "./../function/store-ajax"

//delete mission on popup open
let deleteUrl;
$(".delete-mission").on('submit', function (e) {
    e.preventDefault()

    deleteUrl = $(this).attr('action')
    deleteAjax(deleteUrl)
    getMission()

    $(this).parents('.modal').modal('hide')
})

//delete social media on popup open
$(".delete-social").on('submit', function (e) {
    e.preventDefault()

    deleteUrl = $(this).attr('action')
    deleteAjax(deleteUrl)
    getSocialMedia()

    $(this).parents('.modal').modal('hide')
})

//add new mission on popup open
let storeUrl, datanya, formData;
$("#store-mission").on('submit', function (e) {
    e.preventDefault()
    
    storeUrl = $(this).attr('action')
    console.log('store data', storeUrl)
    
    formData = {
        content: $("[name='content']").val(),
    };
    storeAjax(storeUrl, formData)

    getMission()

    $(this).parents('.modal').modal('hide')
})

//add new social media on popup open
// $("#modal-add-social-media form").on('submit', function (e) {
//     e.preventDefault()

//     storeUrl = $(this).attr('action')
//     formData = $(this).serialize()

//     storeAjax(storeUrl, formData)
//     $(this).parents('.modal').modal('hide')
// })