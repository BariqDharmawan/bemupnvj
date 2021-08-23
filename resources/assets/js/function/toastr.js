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

export {showToastr}