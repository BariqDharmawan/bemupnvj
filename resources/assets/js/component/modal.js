import { deleteAjax } from "../function/delete-ajax"
import { getAddress, getMission, getSocialMedia, getContact, getArticle } from "../function/get-ajax";
import { storeAjax, storedData } from "./../function/store-ajax"
import { activeTabName } from "./tabs";

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

//edit address on popup open
$("#edit-address").on("submit", function (e) {
    e.preventDefault()
    storeUrl = $(this).attr('action')
    formData = $(this).serialize()

    storeAjax(storeUrl, formData, $(this))
    getAddress()
})

//edit email on popup open
$("#edit-email").on("submit", function (e) {
    e.preventDefault()
    storeUrl = $(this).attr('action')
    formData = $(this).serialize()

    storeAjax(storeUrl, formData, $(this))
    getContact()
})

//edit email on popup open
$("#edit-telephone").on("submit", function (e) {
    e.preventDefault()
    storeUrl = $(this).attr('action')
    formData = $(this).serialize()

    storeAjax(storeUrl, formData, $(this))
    getContact()
})

//edit article on popup open
$(".submit-article").on('submit', function (e) {
    e.preventDefault()
    storeUrl = $(this).attr('action')
    formData = $(this).serialize()

    const storedAjax = storeAjax(storeUrl, formData, $(this))
    const categoryId = $(this).find("[name='blog_category_id']").val()

    console.info(activeTabName)
    localStorage.setItem('currentActiveTab', activeTabName)
    
    window.location.reload();

    
})