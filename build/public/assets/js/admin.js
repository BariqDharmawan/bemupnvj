/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/js/component/dropzone.js":
/*!***************************************************!*\
  !*** ./resources/assets/js/component/dropzone.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _function_delete_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../function/delete-ajax */ "./resources/assets/js/function/delete-ajax.js");
/* harmony import */ var _function_get_ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../function/get-ajax */ "./resources/assets/js/function/get-ajax.js");
/* harmony import */ var _function_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../function/global */ "./resources/assets/js/function/global.js");
/* harmony import */ var _function_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../function/toastr */ "./resources/assets/js/function/toastr.js");



 //ajax delete banner on page /primary-cover

if (document.querySelectorAll('.dropzone').length > 0 || document.querySelectorAll('.dropzone-inside-form')) {
  Dropzone.autoDiscover = false;
} // $(function () {
//change primary cover using dropzone


if (document.querySelectorAll('.dropzone-single').length > 0) {
  var myDropzone = new Dropzone('.dropzone-single', {
    maxFilesize: 20,
    //20mb
    acceptedFiles: ".jpeg,.jpg,.png,.pdf",
    headers: {
      'X-CSRF-TOKEN': _function_global__WEBPACK_IMPORTED_MODULE_2__.csrfToken
    }
  });
  var getOldBannerId;
  myDropzone.on('success', function (file, response) {
    getOldBannerId = $(this)[0]['element']['dataset']['oldBannerId'];
    (0,_function_delete_ajax__WEBPACK_IMPORTED_MODULE_0__.deleteAjax)("/primary-cover/".concat(getOldBannerId));
    (0,_function_get_ajax__WEBPACK_IMPORTED_MODULE_1__.getNewBanner)();
    (0,_function_toastr__WEBPACK_IMPORTED_MODULE_3__.showToastr)('success', response.message);
  });
  myDropzone.on('complete', function (file) {
    myDropzone.removeFile(file);
  });
}

if (document.querySelectorAll('.dropzone-inside-form').length > 0) {
  document.querySelectorAll('.dropzone-inside-form').forEach(function (formWithDropzone) {
    var form = formWithDropzone.closest('form');
    var dropzoneInsideForm = new Dropzone('.dropzone-inside-form', {
      url: form.action,
      paramName: formWithDropzone.dataset.name || 'file',
      maxFilesize: 20,
      //20mb
      acceptedFiles: ".jpeg,.jpg,.png,.pdf",
      autoProcessQueue: false,
      headers: {
        'X-CSRF-TOKEN': _function_global__WEBPACK_IMPORTED_MODULE_2__.csrfToken
      }
    });
    formWithDropzone.closest('form').addEventListener('submit', function (e) {
      e.preventDefault();
      console.log(new FormData(this));
      dropzoneInsideForm.processQueue();
    });
    dropzoneInsideForm.on('error', function (file, error) {
      return console.error(error);
    });
  });
} // })

/***/ }),

/***/ "./resources/assets/js/component/input.js":
/*!************************************************!*\
  !*** ./resources/assets/js/component/input.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _function_get_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../function/get-ajax */ "./resources/assets/js/function/get-ajax.js");
/* harmony import */ var _function_update_ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../function/update-ajax */ "./resources/assets/js/function/update-ajax.js");
/* harmony import */ var _function_store_ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../function/store-ajax */ "./resources/assets/js/function/store-ajax.js");
/* harmony import */ var _function_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../function/validation */ "./resources/assets/js/function/validation.js");




$('.select2bs4').select2({
  theme: 'bootstrap4',
  placeholder: 'Choose a platform'
});
$('.summernote').summernote(); //submit #our-vision on focusout

$(".submit-on-focusout").on('focusout', function (e) {
  e.preventDefault();

  if ($(this).is(":not([readonly])")) {
    var form = $(this).parents('form');
    var storeUrl = form.attr('action');
    (0,_function_store_ajax__WEBPACK_IMPORTED_MODULE_2__.storeAjax)(storeUrl, form.serialize());
  }
}); //make input with class .change-readonly-input back to readonly when clicking outside

var inputReadonly = $(".change-readonly-input");
$(document).on('mouseup', function (e) {
  if (!inputReadonly.is(e.target) && inputReadonly.has(e.target).length === 0) {
    inputReadonly.prop('readonly', true);
    inputReadonly.filter("[data-is-plaintext]").addClass('form-control-plaintext');
  }
}); //click btn to make input readonly become editable

$(".btn--change-readonly-to-editable").on('click', function () {
  var inputTarget = $(this).data('input');
  $(inputTarget).prop('readonly', false).trigger('focus').removeClass('form-control-plaintext');
}); //submit #mission-content-* on focusout

$("[id*='mission-content-']").on('focusout', function () {
  var formAction = $(this).data('action-url');
  console.log($(this).val());
  (0,_function_update_ajax__WEBPACK_IMPORTED_MODULE_1__.updateAjax)(formAction, {
    content: $(this).val()
  });
});
$(".img-upload-preview").change(function () {
  (0,_function_validation__WEBPACK_IMPORTED_MODULE_3__.previewUploadImg)($(this));
});
var datepicker = $(".air-datepicker").datepicker({
  language: 'en',
  position: 'top left',
  minDate: new Date(),
  dateFormat: 'yyyy-mm-dd',
  autoClose: true,
  selectDate: $(undefined).val() ? new Date($(undefined).val()) : null
});

/***/ }),

/***/ "./resources/assets/js/component/modal.js":
/*!************************************************!*\
  !*** ./resources/assets/js/component/modal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _function_delete_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../function/delete-ajax */ "./resources/assets/js/function/delete-ajax.js");
/* harmony import */ var _function_get_ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../function/get-ajax */ "./resources/assets/js/function/get-ajax.js");
/* harmony import */ var _function_store_ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../function/store-ajax */ "./resources/assets/js/function/store-ajax.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs */ "./resources/assets/js/component/tabs.js");



 //delete mission on popup open

var deleteUrl;
$(".delete-mission").on('submit', function (e) {
  e.preventDefault();
  deleteUrl = $(this).attr('action');
  (0,_function_delete_ajax__WEBPACK_IMPORTED_MODULE_0__.deleteAjax)(deleteUrl);
  (0,_function_get_ajax__WEBPACK_IMPORTED_MODULE_1__.getMission)();
  $(this).parents('.modal').modal('hide');
}); //delete social media on popup open

$(".delete-social").on('submit', function (e) {
  e.preventDefault();
  deleteUrl = $(this).attr('action');
  (0,_function_delete_ajax__WEBPACK_IMPORTED_MODULE_0__.deleteAjax)(deleteUrl);
  (0,_function_get_ajax__WEBPACK_IMPORTED_MODULE_1__.getSocialMedia)();
  $(this).parents('.modal').modal('hide');
}); //add new mission on popup open

var storeUrl, datanya, formData;
$("#store-mission").on('submit', function (e) {
  e.preventDefault();
  storeUrl = $(this).attr('action');
  console.log('store data', storeUrl);
  formData = {
    content: $("[name='content']").val()
  };
  (0,_function_store_ajax__WEBPACK_IMPORTED_MODULE_2__.storeAjax)(storeUrl, formData);
  (0,_function_get_ajax__WEBPACK_IMPORTED_MODULE_1__.getMission)();
  $(this).parents('.modal').modal('hide');
}); //add new social media on popup open
// $("#modal-add-social-media form").on('submit', function (e) {
//     e.preventDefault()
//     storeUrl = $(this).attr('action')
//     formData = $(this).serialize()
//     storeAjax(storeUrl, formData)
//     $(this).parents('.modal').modal('hide')
// })
//edit email on popup open

$(".edit-contact").on("submit", function (e) {
  e.preventDefault();
  storeUrl = $(this).attr('action');
  formData = $(this).serialize();
  (0,_function_store_ajax__WEBPACK_IMPORTED_MODULE_2__.storeAjax)(storeUrl, formData, $(this));
  (0,_function_get_ajax__WEBPACK_IMPORTED_MODULE_1__.getContact)();
}); //edit article on popup open

$(".submit-article").on('submit', function (e) {
  e.preventDefault();
  storeUrl = $(this).attr('action');
  formData = $(this).serialize();
  var storedAjax = (0,_function_store_ajax__WEBPACK_IMPORTED_MODULE_2__.storeAjax)(storeUrl, formData, $(this));
  var categoryId = $(this).find("[name='blog_category_id']").val();
  console.info(_tabs__WEBPACK_IMPORTED_MODULE_3__.activeTabName);
  localStorage.setItem('currentActiveTab', _tabs__WEBPACK_IMPORTED_MODULE_3__.activeTabName);
  window.location.reload();
});
$(".modal").on('shown.bs.modal', function (event) {
  localStorage.setItem('modal-open', $(this).attr('id'));
  console.log(localStorage.getItem('modal-open'));
});

if (localStorage.getItem('modal-open')) {
  console.log(localStorage.getItem('modal-open'));

  if ($("#".concat(localStorage.getItem('modal-open'))).find('.validation-error-backend').length > 0) {
    $("#".concat(localStorage.getItem('modal-open'))).modal('show');
    $(".modal").not("#".concat(localStorage.getItem('modal-open'))).find('.validation-error-backend').remove(); // $(".modal.modal--single").find("input:not([name='_token']), textarea, select").val(null)
  } else {
    localStorage.removeItem('modal-open');
  }
}

/***/ }),

/***/ "./resources/assets/js/component/tabs.js":
/*!***********************************************!*\
  !*** ./resources/assets/js/component/tabs.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeTab": () => (/* binding */ activeTab),
/* harmony export */   "activeTabName": () => (/* binding */ activeTabName),
/* harmony export */   "defaultActiveTabName": () => (/* binding */ defaultActiveTabName)
/* harmony export */ });
/* harmony import */ var _function_switch_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../function/switch-tab */ "./resources/assets/js/function/switch-tab.js");

$(".nav-pills .nav-link").on('click', function () {
  (0,_function_switch_tab__WEBPACK_IMPORTED_MODULE_0__.deactiveSiblings)($(this));
});
var activeTab, activeTabName;
var defaultActiveTabName = $('#tab-article .nav-item:first-child a[data-toggle="pill"]').attr('href');
activeTabName = defaultActiveTabName;
$('#tab-article a[data-toggle="pill"]').on('shown.bs.tab', function (event) {
  activeTab = event.target;
  activeTabName = activeTab.getAttribute('href');
  var previousActive = event.relatedTarget;
  $("[name='blog_category_id']").val(activeTab.dataset.categoryId);
  console.log(activeTabName);
});
$("#tab-blog");


/***/ }),

/***/ "./resources/assets/js/component/todo-list.js":
/*!****************************************************!*\
  !*** ./resources/assets/js/component/todo-list.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _function_store_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../function/store-ajax */ "./resources/assets/js/function/store-ajax.js");
/* harmony import */ var _function_update_ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../function/update-ajax */ "./resources/assets/js/function/update-ajax.js");


var todoList = $('.todo-list').sortable({
  placeholder: 'sort-highlight',
  handle: '.handle',
  forcePlaceholderSize: true,
  zIndex: 999999
}); //update #list-missions order

$("#list-missions").on('sortupdate', function (event, ui) {
  var allItem = $(this).find("li");
  var totalAllItem = allItem.length;
  var updatedListId = $(this).sortable('toArray', {
    attribute: 'data-id'
  });
  updatedListId = updatedListId.map(function (id) {
    return Number(id);
  });
  (0,_function_store_ajax__WEBPACK_IMPORTED_MODULE_0__.storeAjax)('/mission/update-all-list', {
    updated_list_Id: updatedListId
  });
  allItem.each(function (i, el) {
    $(this).find('.todo-list__number--circle').text(Number(i) + 1);
  });
});

/***/ }),

/***/ "./resources/assets/js/function/delete-ajax.js":
/*!*****************************************************!*\
  !*** ./resources/assets/js/function/delete-ajax.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteAjax": () => (/* binding */ deleteAjax)
/* harmony export */ });
/* harmony import */ var _toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toastr */ "./resources/assets/js/function/toastr.js");


function deleteAjax(url) {
  $.ajax({
    type: 'DELETE',
    url: url,
    contentType: 'application/json; charset=utf-8'
  }).done(function (data) {
    console.log('success');

    if (data.message) {
      (0,_toastr__WEBPACK_IMPORTED_MODULE_0__.showToastr)('success', data.message);
    }
  }).fail(function (error) {
    console.log(error);
  });
}



/***/ }),

/***/ "./resources/assets/js/function/get-ajax.js":
/*!**************************************************!*\
  !*** ./resources/assets/js/function/get-ajax.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNewBanner": () => (/* binding */ getNewBanner),
/* harmony export */   "getMission": () => (/* binding */ getMission),
/* harmony export */   "getSocialMedia": () => (/* binding */ getSocialMedia),
/* harmony export */   "getContact": () => (/* binding */ getContact),
/* harmony export */   "getArticle": () => (/* binding */ getArticle)
/* harmony export */ });
/* harmony import */ var _component_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/tabs */ "./resources/assets/js/component/tabs.js");
/* harmony import */ var _switch_tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switch-tab */ "./resources/assets/js/function/switch-tab.js");



function getNewBanner() {
  $.ajax({
    type: "GET",
    url: '/api/primary-cover',
    dataType: 'json',
    cache: false,
    success: function success(data) {
      console.log('get new banner', data.primaryCoverToJson);
      $("#primary-cover").attr('src', data.primaryCoverToJson.filename);
      $(".dropzone").attr('data-old-banner-id', data.primaryCoverToJson.id);
    },
    error: function error(_error) {
      console.log(_error);
    }
  });
}

function getMission() {
  $("#list-missions").load('/about-us/visi-misi #list-missions', function (response, status, xhr) {
    if (status == 'error') {
      console.log(xhr.status + " " + xhr.statusText);
    } else if (status == 'success') {
      console.log('get current mission success');
    }
  });
}

function getSocialMedia() {
  $("#list-social-media").load('/our-contact/manage #list-social-media', function (response, status, xhr) {
    if (status == 'error') {
      console.log(xhr.status + " " + xhr.statusText);
    } else if (status == 'success') {
      console.log('get current social media success');
    }
  });
}

function getContact() {
  $("#list-contact").load('/our-contact/manage #list-contact', function (response, status, xhr) {
    if (status == 'error') {
      console.error(xhr.status + " " + xhr.statusText);
    } else if (status == 'success') {
      console.info('get current address');
    }
  });
}

function getArticle() {
  $("main.content").load('/blog/manage main.content .container-fluid', function (response, status, xhr) {
    if (status == 'error') {
      console.error(xhr.status + " " + xhr.statusText);
    } else if (status == 'success') {
      console.info('get current articles');
    }
  });
}



/***/ }),

/***/ "./resources/assets/js/function/global.js":
/*!************************************************!*\
  !*** ./resources/assets/js/function/global.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "csrfToken": () => (/* binding */ csrfToken)
/* harmony export */ });
var csrfToken = $('meta[name="csrf-token"]').attr('content');
$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': csrfToken
  }
});

function getStringAfter(stringnya, after) {
  return stringnya.split(after).splice(1).join(after);
}



/***/ }),

/***/ "./resources/assets/js/function/pdf.js":
/*!*********************************************!*\
  !*** ./resources/assets/js/function/pdf.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pdfobject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pdfobject */ "./node_modules/pdfobject/pdfobject.js");
/* harmony import */ var pdfobject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pdfobject__WEBPACK_IMPORTED_MODULE_0__);

$(".preview-pdf--without-header").each(function () {
  var pdfPreviewEl = $(this).attr('id');
  var pdfSrc = $(this).data('pdf-src');
  pdfobject__WEBPACK_IMPORTED_MODULE_0___default().embed(pdfSrc, "#".concat(pdfPreviewEl), {
    fallbackLink: "<p>Browser device mu tidak support embed PDF,\n                            <a href='[url]'>download saja</a>\n                        </p>",
    height: $(this).data('height')
  });
});

/***/ }),

/***/ "./resources/assets/js/function/store-ajax.js":
/*!****************************************************!*\
  !*** ./resources/assets/js/function/store-ajax.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storeAjax": () => (/* binding */ storeAjax),
/* harmony export */   "storedData": () => (/* binding */ storedData)
/* harmony export */ });
/* harmony import */ var _toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toastr */ "./resources/assets/js/function/toastr.js");

var storedData;

function storeAjax(url, datanya) {
  var formEl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  $.ajax({
    type: "POST",
    url: url,
    data: datanya,
    dataType: "json",
    encode: true
  }).done(function (data) {
    storedData = data.data;
    console.log('store data from store-ajax', storedData);
    (0,_toastr__WEBPACK_IMPORTED_MODULE_0__.showToastr)('success', data.message);

    if (formEl) {
      formEl.parents('.modal').modal('hide');
      formEl.find('[class*="-error-message"]').text('');
    }
  }).fail(function (xhr, status, error) {
    var allErrorMessage = JSON.parse(xhr.responseText);
    $.each(allErrorMessage, function (name, val) {
      var jsonResponseStatus = JSON.parse(JSON.stringify(val));
      $.each(jsonResponseStatus, function (name2, val2) {
        var errorMessage = val2.message;
        var field = val2.field;
        $(".".concat(field, "-error-message")).text(errorMessage);
        console.log(field, errorMessage);
      });
    });
  });
}



/***/ }),

/***/ "./resources/assets/js/function/switch-tab.js":
/*!****************************************************!*\
  !*** ./resources/assets/js/function/switch-tab.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deactiveSiblings": () => (/* binding */ deactiveSiblings)
/* harmony export */ });
function deactiveSiblings(currentTab) {
  currentTab.parent().siblings().find('.nav-link').removeClass('active').attr('aria-selected', 'false');
  console.log('remove active siblings');
}

/***/ }),

/***/ "./resources/assets/js/function/toastr.js":
/*!************************************************!*\
  !*** ./resources/assets/js/function/toastr.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showToastr": () => (/* binding */ showToastr)
/* harmony export */ });
function showToastr(type, message) {
  switch (type) {
    case 'success':
      toastr.success(message);
      break;

    case 'info':
      toastr.info(message);
      break;

    case 'error':
      toastr.error(message);
      break;

    case 'warning':
      toastr.warning(message);
      break;
  }

  toastr.options.closeButton = true;
  toastr.options.closeDuration = 150;
  toastr.options.timeOut = 5;
  toastr.options.extendedTimeOut = 3;
}



/***/ }),

/***/ "./resources/assets/js/function/update-ajax.js":
/*!*****************************************************!*\
  !*** ./resources/assets/js/function/update-ajax.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateAjax": () => (/* binding */ updateAjax)
/* harmony export */ });
/* harmony import */ var _toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toastr */ "./resources/assets/js/function/toastr.js");

function updateAjax(url, datanya) {
  $.ajax({
    type: "PUT",
    url: url,
    data: datanya,
    dataType: "json",
    encode: true
  }).done(function (response) {
    console.log(response);

    if (response.isDirty) {
      (0,_toastr__WEBPACK_IMPORTED_MODULE_0__.showToastr)('success', response.message);
    }
  }).fail(function (error) {
    console.log(error);
  });
}

/***/ }),

/***/ "./resources/assets/js/function/validation.js":
/*!****************************************************!*\
  !*** ./resources/assets/js/function/validation.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "previewUploadImg": () => (/* binding */ previewUploadImg)
/* harmony export */ });
$(".not-allowed-space").on('keypress', function (e) {
  if (event.which === 32) {
    return false;
  }
});
function previewUploadImg(input) {
  var previewEl = "#".concat(input[0].dataset.imgPreview);
  var defaultPreview = document.querySelector(previewEl).dataset.defaultPreview;
  console.log(input[0], previewEl);

  if (input[0].value) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $(previewEl).attr('src', e.target.result);
    };

    reader.readAsDataURL(input[0].files[0]);
  } else {
    $(previewEl).attr('src', defaultPreview);
  }
}

/***/ }),

/***/ "./node_modules/pdfobject/pdfobject.js":
/*!*********************************************!*\
  !*** ./node_modules/pdfobject/pdfobject.js ***!
  \*********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 *  PDFObject v2.2.7
 *  https://github.com/pipwerks/PDFObject
 *  @license
 *  Copyright (c) 2008-2021 Philip Hutchison
 *  MIT-style license: http://pipwerks.mit-license.org/
 *  UMD module pattern from https://github.com/umdjs/umd/blob/master/templates/returnExports.js
 */

(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function () {

    "use strict";

    //PDFObject is designed for client-side (browsers), not server-side (node)
    //Will choke on undefined navigator and window vars when run on server
    //Return boolean false and exit function when running server-side

    if( typeof window === "undefined" || 
        window.navigator === undefined || 
        window.navigator.userAgent === undefined || 
        window.navigator.mimeTypes === undefined){ 
            return false;
    }

    let pdfobjectversion = "2.2.7";
    let nav = window.navigator;
    let ua = window.navigator.userAgent;

    //Time to jump through hoops -- browser vendors do not make it easy to detect PDF support.

    /*
        IE11 still uses ActiveX for Adobe Reader, but IE 11 doesn't expose window.ActiveXObject the same way 
        previous versions of IE did. window.ActiveXObject will evaluate to false in IE 11, but "ActiveXObject" 
        in window evaluates to true.

        MS Edge does not support ActiveX so this test will evaluate false
    */
    let isIE = ("ActiveXObject" in window);

    /*
        There is a coincidental correlation between implementation of window.promises and native PDF support in desktop browsers
        We use this to assume if the browser supports promises it supports embedded PDFs
        Is this fragile? Sort of. But browser vendors removed mimetype detection, so we're left to improvise
    */
    let isModernBrowser = (window.Promise !== undefined);

    //Older browsers still expose the mimeType
    let supportsPdfMimeType = (nav.mimeTypes["application/pdf"] !== undefined);

    //Safari on iPadOS doesn't report as 'mobile' when requesting desktop site, yet still fails to embed PDFs
    let isSafariIOSDesktopMode = (  nav.platform !== undefined && 
                                    nav.platform === "MacIntel" && 
                                    nav.maxTouchPoints !== undefined && 
                                    nav.maxTouchPoints > 1 );

    //Quick test for mobile devices.
    let isMobileDevice = (isSafariIOSDesktopMode || /Mobi|Tablet|Android|iPad|iPhone/.test(ua));

    //Safari desktop requires special handling 
    let isSafariDesktop = ( !isMobileDevice && 
                            nav.vendor !== undefined && 
                            /Apple/.test(nav.vendor) && 
                            /Safari/.test(ua) );
    
    //Firefox started shipping PDF.js in Firefox 19. If this is Firefox 19 or greater, assume PDF.js is available
    let isFirefoxWithPDFJS = (!isMobileDevice && /irefox/.test(ua) && ua.split("rv:").length > 1) ? (parseInt(ua.split("rv:")[1].split(".")[0], 10) > 18) : false;


    /* ----------------------------------------------------
       Supporting functions
       ---------------------------------------------------- */

    let createAXO = function (type){
        var ax;
        try {
            ax = new ActiveXObject(type);
        } catch (e) {
            ax = null; //ensure ax remains null
        }
        return ax;
    };

    //If either ActiveX support for "AcroPDF.PDF" or "PDF.PdfCtrl" are found, return true
    //Constructed as a method (not a prop) to avoid unneccesarry overhead -- will only be evaluated if needed
    let supportsPdfActiveX = function (){ return !!(createAXO("AcroPDF.PDF") || createAXO("PDF.PdfCtrl")); };

    //Determines whether PDF support is available
    let supportsPDFs = (
        //As of Sept 2020 no mobile browsers properly support PDF embeds
        !isMobileDevice && (
            //We're moving into the age of MIME-less browsers. They mostly all support PDF rendering without plugins.
            isModernBrowser ||
            //Modern versions of Firefox come bundled with PDFJS
            isFirefoxWithPDFJS ||
            //Browsers that still support the original MIME type check
            supportsPdfMimeType ||
            //Pity the poor souls still using IE
            (isIE && supportsPdfActiveX())
        )
    );

    //Create a fragment identifier for using PDF Open parameters when embedding PDF
    let buildURLFragmentString = function(pdfParams){

        let string = "";
        let prop;

        if(pdfParams){

            for (prop in pdfParams) {
                if (pdfParams.hasOwnProperty(prop)) {
                    string += encodeURIComponent(prop) + "=" + encodeURIComponent(pdfParams[prop]) + "&";
                }
            }

            //The string will be empty if no PDF Params found
            if(string){

                string = "#" + string;

                //Remove last ampersand
                string = string.slice(0, string.length - 1);

            }

        }

        return string;

    };

    let embedError = function (msg, suppressConsole){
        if(!suppressConsole){
            console.log("[PDFObject] " + msg);
        }
        return false;
    };

    let emptyNodeContents = function (node){
        while(node.firstChild){
            node.removeChild(node.firstChild);
        }
    };

    let getTargetElement = function (targetSelector){

        //Default to body for full-browser PDF
        let targetNode = document.body;

        //If a targetSelector is specified, check to see whether
        //it's passing a selector, jQuery object, or an HTML element

        if(typeof targetSelector === "string"){

            //Is CSS selector
            targetNode = document.querySelector(targetSelector);

        } else if (window.jQuery !== undefined && targetSelector instanceof jQuery && targetSelector.length) {

            //Is jQuery element. Extract HTML node
            targetNode = targetSelector.get(0);

        } else if (targetSelector.nodeType !== undefined && targetSelector.nodeType === 1){

            //Is HTML element
            targetNode = targetSelector;

        }

        return targetNode;

    };

    let generatePDFJSMarkup = function (targetNode, url, pdfOpenFragment, PDFJS_URL, id, title, omitInlineStyles){

        //Ensure target element is empty first
        emptyNodeContents(targetNode);

        let fullURL = PDFJS_URL + "?file=" + encodeURIComponent(url) + pdfOpenFragment;
        let div = document.createElement("div");
        let iframe = document.createElement("iframe");
        
        iframe.src = fullURL;
        iframe.className = "pdfobject";
        iframe.type = "application/pdf";
        iframe.frameborder = "0";
        iframe.allow = "fullscreen";
        iframe.title = title;
        
        if(id){
            iframe.id = id;
        }

        if(!omitInlineStyles){
            div.style.cssText = "position: absolute; top: 0; right: 0; bottom: 0; left: 0;";
            iframe.style.cssText = "border: none; width: 100%; height: 100%;";
            targetNode.style.position = "relative";
            targetNode.style.overflow = "auto";        
        }

        div.appendChild(iframe);
        targetNode.appendChild(div);
        targetNode.classList.add("pdfobject-container");
        
        return targetNode.getElementsByTagName("iframe")[0];

    };

    let generatePDFObjectMarkup = function (embedType, targetNode, targetSelector, url, pdfOpenFragment, width, height, id, title, omitInlineStyles){

        //Ensure target element is empty first
        emptyNodeContents(targetNode);

        let embed = document.createElement(embedType);
        embed.src = url + pdfOpenFragment;
        embed.className = "pdfobject";
        embed.type = "application/pdf";
        embed.title = title;

        if(id){
            embed.id = id;
        }

        if(embedType === "iframe"){
            embed.allow = "fullscreen";
        }

        if(!omitInlineStyles){

            let style = (embedType === "embed") ? "overflow: auto;" : "border: none;";

            if(targetSelector && targetSelector !== document.body){
                style += "width: " + width + "; height: " + height + ";";
            } else {
                style += "position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;";
            }

            embed.style.cssText = style; 

        }

        targetNode.classList.add("pdfobject-container");
        targetNode.appendChild(embed);

        return targetNode.getElementsByTagName(embedType)[0];

    };

    let embed = function(url, targetSelector, options){

        //If targetSelector is not defined, convert to boolean
        let selector = targetSelector || false;

        //Ensure options object is not undefined -- enables easier error checking below
        let opt = options || {};

        //Get passed options, or set reasonable defaults
        let id = (typeof opt.id === "string") ? opt.id : "";
        let page = opt.page || false;
        let pdfOpenParams = opt.pdfOpenParams || {};
        let fallbackLink = opt.fallbackLink || true;
        let width = opt.width || "100%";
        let height = opt.height || "100%";
        let title = opt.title || "Embedded PDF";
        let assumptionMode = (typeof opt.assumptionMode === "boolean") ? opt.assumptionMode : true;
        let forcePDFJS = (typeof opt.forcePDFJS === "boolean") ? opt.forcePDFJS : false;
        let supportRedirect = (typeof opt.supportRedirect === "boolean") ? opt.supportRedirect : false;
        let omitInlineStyles = (typeof opt.omitInlineStyles === "boolean") ? opt.omitInlineStyles : false;
        let suppressConsole = (typeof opt.suppressConsole === "boolean") ? opt.suppressConsole : false;
        let forceIframe = (typeof opt.forceIframe === "boolean") ? opt.forceIframe : false;
        let PDFJS_URL = opt.PDFJS_URL || false;
        let targetNode = getTargetElement(selector);
        let fallbackHTML = "";
        let pdfOpenFragment = "";
        let fallbackHTML_default = "<p>This browser does not support inline PDFs. Please download the PDF to view it: <a href='[url]'>Download PDF</a></p>";

        //Ensure URL is available. If not, exit now.
        if(typeof url !== "string"){ return embedError("URL is not valid", suppressConsole); }

        //If target element is specified but is not valid, exit without doing anything
        if(!targetNode){ return embedError("Target element cannot be determined", suppressConsole); }

        //page option overrides pdfOpenParams, if found
        if(page){ pdfOpenParams.page = page; }

        //Stringify optional Adobe params for opening document (as fragment identifier)
        pdfOpenFragment = buildURLFragmentString(pdfOpenParams);


        // --== Do the dance: Embed attempt #1 ==--

        //If the forcePDFJS option is invoked, skip everything else and embed as directed
        if(forcePDFJS && PDFJS_URL){
            return generatePDFJSMarkup(targetNode, url, pdfOpenFragment, PDFJS_URL, id, title, omitInlineStyles);
        }
 
        // --== Embed attempt #2 ==--

        //Embed PDF if traditional support is provided, or if this developer is willing to roll with assumption
        //that modern desktop (not mobile) browsers natively support PDFs 
        if(supportsPDFs || (assumptionMode && !isMobileDevice)){
            
            //Should we use <embed> or <iframe>? In most cases <embed>. 
            //Allow developer to force <iframe>, if desired
            //There is an edge case where Safari does not respect 302 redirect requests for PDF files when using <embed> element.
            //Redirect appears to work fine when using <iframe> instead of <embed> (Addresses issue #210)
            //Forcing Safari desktop to use iframe due to freezing bug in macOS 11 (Big Sur)
            let embedtype = (forceIframe || supportRedirect || isSafariDesktop) ? "iframe" : "embed";
            
            return generatePDFObjectMarkup(embedtype, targetNode, targetSelector, url, pdfOpenFragment, width, height, id, title, omitInlineStyles);

        }
        
        // --== Embed attempt #3 ==--
        
        //If everything else has failed and a PDFJS fallback is provided, try to use it
        if(PDFJS_URL){
            return generatePDFJSMarkup(targetNode, url, pdfOpenFragment, PDFJS_URL, id, title, omitInlineStyles);
        }
        
        // --== PDF embed not supported! Use fallback ==-- 

        //Display the fallback link if available
        if(fallbackLink){

            fallbackHTML = (typeof fallbackLink === "string") ? fallbackLink : fallbackHTML_default;
            targetNode.innerHTML = fallbackHTML.replace(/\[url\]/g, url);

        }

        return embedError("This browser does not support embedded PDFs", suppressConsole);

    };

    return {
        embed: function (a,b,c){ return embed(a,b,c); },
        pdfobjectversion: (function () { return pdfobjectversion; })(),
        supportsPDFs: (function (){ return supportsPDFs; })()
    };

}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************************!*\
  !*** ./resources/assets/js/admin.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _function_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/global */ "./resources/assets/js/function/global.js");
/* harmony import */ var _function_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/validation */ "./resources/assets/js/function/validation.js");
/* harmony import */ var _component_todo_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/todo-list */ "./resources/assets/js/component/todo-list.js");
/* harmony import */ var _component_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/modal */ "./resources/assets/js/component/modal.js");
/* harmony import */ var _component_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/dropzone */ "./resources/assets/js/component/dropzone.js");
/* harmony import */ var _component_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/input */ "./resources/assets/js/component/input.js");
/* harmony import */ var _component_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/tabs */ "./resources/assets/js/component/tabs.js");
/* harmony import */ var _function_pdf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./function/pdf */ "./resources/assets/js/function/pdf.js");








bsCustomFileInput.init();
$.widget.bridge('uibutton', $.ui.button);
})();

/******/ })()
;