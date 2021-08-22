import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AboutUsController {
    public async index({ view }: HttpContextContract) {
        const appName: string = Env.get('APP_NAME');
        const titlePage = 'About Us'
        return view.render('about-us', {appName, titlePage})
    }

    public async create({ }: HttpContextContract) {
    }

    public async store({ }: HttpContextContract) {
    }

    public async show({ }: HttpContextContract) {
    }

    public async edit({ }: HttpContextContract) {
    }

    public async update({ }: HttpContextContract) {
    }

    public async destroy({ }: HttpContextContract) {
    }
}
