// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"

export default class AuthController {
    public async index({ view }: HttpContextContract) {
        const titlePage = 'Login'

        return view.render('auth/login', {titlePage})
    }
    public async store({request, auth, response, session}: HttpContextContract) {
        const { email, password } = request.all()

        try {
            await auth.use('web').attempt(email, password, true)
            return response.redirect('/dashboard')
        } catch (error) {
            session.flash('notification', error)
            console.log(error)
            return response.redirect().back()
        }
    }
    /**
     * async logout
     */
    public async logout({ auth, response }: HttpContextContract) {
        await auth.use('web').logout()
        return response.redirect().toPath('/login')
    }
}
