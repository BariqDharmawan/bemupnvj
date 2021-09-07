import {triggerDropdown} from './component/menu'

const btnTrigger = document.querySelectorAll('.nav__trigger-dropdown')
btnTrigger.forEach(triggerBtn => {
    triggerBtn.addEventListener('click', function () {
        triggerDropdown(this)
    })
})