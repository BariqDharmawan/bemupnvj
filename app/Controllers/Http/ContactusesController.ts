import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ContentPage from 'App/Models/ContentPage'
import Lead from 'App/Models/Lead'

export default class ContactusesController {
    public async content({ view }: HttpContextContract) {
        const titlePage = 'Deskripsi page contact us'
        
        const contentContactPage = await ContentPage.query()
                                    .where('page_name', 'contact').first()

        return view.render('contact-us/content', {titlePage, contentContactPage})
    }
    public async leads({ view }: HttpContextContract) {
        const contactUs = await Lead.query().orderBy('created_at', 'asc')
        return view.render('contact-us/lead', {contactUs});
    }
    public async index({ }: HttpContextContract) {
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
