import axios from "axios"

const formAjax = document.querySelectorAll('.form-ajax')
let storeUrl, formData
formAjax.forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        
        axios({
            method: 'POST',
            url: this.action,
            data: new FormData(this)
        })
        .then(function (response) {
            const datas = response.data
            console.log(datas);
            document.querySelectorAll('.error-message').forEach(errorMessage => {
                errorMessage.textContent = ''
            })
            alert(response.data.message);
            form.reset()
        })
        .catch(function (error) {
            const errorValidation = error.response.data.errors
            for (let i = 0; i < errorValidation.length; i++) {
                document.querySelector(`.${errorValidation[i].field}-error-message`)
                        .textContent = errorValidation[i].message
            }
        });
    })
})