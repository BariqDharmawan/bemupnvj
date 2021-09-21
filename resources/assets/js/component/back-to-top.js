const btnBackToTop = document.querySelector('.btn-back-top')
const heightPage = document.body.offsetHeight
const heightFooter = document.querySelector('footer').scrollHeight
const heightNav = document.querySelector('#primary-nav').scrollHeight
const heightContent = document.querySelector('main').scrollHeight

let scrollPosition = 0

window.addEventListener('scroll', function () {
    scrollPosition = this.scrollY
    if (scrollPosition >= heightContent + heightNav ) {
        btnBackToTop.classList.remove('hide-el')
        console.info('footer appear')
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