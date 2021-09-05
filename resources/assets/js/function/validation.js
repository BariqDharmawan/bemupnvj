$(".not-allowed-space").on('keypress', function (e) {
    if (event.which === 32) {
        return false;
    }
})

export function previewUploadImg(input) {
    const previewEl = `#${input[0].dataset.imgPreview}`
    const defaultPreview = document.querySelector(previewEl).dataset.defaultPreview

    console.log(input[0], previewEl)

    if (input[0].value) {
        const reader = new FileReader();
    
        reader.onload = function (e) {
            $(previewEl).attr('src', e.target.result);
        };
        reader.readAsDataURL(input[0].files[0]);
    }
    else {
        $(previewEl).attr('src', defaultPreview);
    }

}