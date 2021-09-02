import { deactiveSiblings } from "../function/switch-tab"

$(".nav-pills .nav-link").on('click', function () {
    deactiveSiblings($(this))
    console.log('fix tabs')
})