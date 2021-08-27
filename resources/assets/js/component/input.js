import { getMission } from "../function/get-ajax";
import { updateAjax } from "../function/update-ajax";
import { storeAjax } from "../function/store-ajax";

$('.select2bs4').select2({
    theme: 'bootstrap4',
    placeholder: 'Choose a platform'
})

//submit #our-vision on focusout
$("#our-vision").on('focusout', function (e) {
    e.preventDefault()
    if ($(this).is(":not([readonly])")) {
        const form = $(this).parents('form')
        const storeUrl = form.attr('action')
        storeAjax(storeUrl, form.serialize())
    }
})

//make input with class .change-readonly-input back to readonly when clicking outside
const inputReadonly = $(".change-readonly-input");
$(document).on('mouseup', function (e) {

    if (!inputReadonly.is(e.target) && inputReadonly.has(e.target).length === 0) {
        inputReadonly.prop('readonly', true)
        inputReadonly.filter("[data-is-plaintext]").addClass('form-control-plaintext')
    }
})

//click btn to make input readonly become editable
$(".btn--change-readonly-to-editable").on('click', function () {
    const inputTarget = $(this).data('input')
    $(inputTarget).prop('readonly', false).trigger('focus')
    .removeClass('form-control-plaintext')
})

//submit #mission-content-* on focusout
$("[id*='mission-content-']").on('focusout', function () {
    const formAction = $(this).data('action-url')
    
    console.log($(this).val())
    updateAjax(formAction, {
        content: $(this).val()
    })
})
