const btnBackToTop = document.querySelector('.btn-back-top')
const heightPage = document.body.clientHeight
const heightFooter = document.querySelector('footer').clientHeight

let scrollPosition = 0
console.log(`heightPage: ${heightPage}`)
window.addEventListener('scroll', function () {
    scrollPosition = this.scrollY
    if (scrollPosition >= heightPage - heightFooter) {
        btnBackToTop.classList.remove('hide-el')
    }
    else {
        btnBackToTop.classList.add('hide-el')
    }
})

btnBackToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})