function triggerDropdown(triggerBtn) {
    const showDropdownClass = 'hide-el-max'
    const dropdownMenu = triggerBtn.nextElementSibling

    triggerBtn.querySelector('.dropdown-icon').classList.toggle('rotate-180')
    dropdownMenu.classList.toggle(showDropdownClass)
}

const btnTrigger = document.querySelectorAll('.nav__trigger-dropdown')
btnTrigger.forEach(triggerBtn => {
    triggerBtn.addEventListener('click', function () {
        triggerDropdown(this)
    })
})