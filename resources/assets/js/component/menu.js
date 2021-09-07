function triggerDropdown(triggerBtn) {
    const showDropdownClass = 'hide-el'
    const dropdownMenu = triggerBtn.nextElementSibling

    triggerBtn.querySelector('.dropdown-icon').classList.toggle('rotate-180')
    dropdownMenu.classList.toggle(showDropdownClass)
}

export {triggerDropdown}