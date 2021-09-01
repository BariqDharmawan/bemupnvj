const csrfToken = $('meta[name="csrf-token"]').attr('content')

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': csrfToken
    }
});

function getStringAfter(stringnya, after) {
    return stringnya.split(after).splice(1).join(after)
}

export {csrfToken}