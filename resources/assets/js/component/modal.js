import { deleteAjax } from "../function/delete-ajax"
import { getMission } from "../function/get-ajax";
import { storeAjax } from "./../function/store-ajax"
import * as Global from "./../function/global";

//delete mission on popup open
let deleteUrl;
$(".delete-mission").on('submit', function (e) {
    e.preventDefault()

    deleteUrl = $(this).attr('action')
    deleteAjax(deleteUrl)
    getMission()

    $(this).parents('.modal').modal('hide')
})

//add new mission on popup open
let storeUrl, datanya;
$("#store-mission").on('submit', function (e) {
    e.preventDefault()
    
    storeUrl = $(this).attr('action')
    console.log('store data', storeUrl)
    
    var formData = {
        content: $("[name='content']").val(),
    };
    storeAjax(storeUrl, formData)

    getMission()

    $(this).parents('.modal').modal('hide')
})