// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"

export default class AuthController {
    public async index({ view }: HttpContextContract) {
        const titlePage = 'Login'
        return view.render('auth/login', {titlePage})
    }
    public async store({request, auth, response}: HttpContextContract, isRemember: boolean = true) {
        const authGuard = auth.use('web')
        
        const email = request.input('email')
        const password = request.input('password')

        isRemember = request.input('isRemember') ?? isRemember

        await authGuard.check()
        if (authGuard.isLoggedIn) {
            
        }
    
        await authGuard.attempt(email, password, isRemember)
        response.redirect().toRoute('admin.dashboard')
    }
}
