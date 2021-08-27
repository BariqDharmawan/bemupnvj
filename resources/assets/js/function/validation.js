$(".not-allowed-space").on('keypress', function (e) {
    if(event.which === 32) {
        return false;
    }
})