import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Guest {
    public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
        if (auth.use('web').isLoggedOut) {
            await next()
        }
        else {
            return response.redirect().toRoute('landing_page')
        }
    }
}
