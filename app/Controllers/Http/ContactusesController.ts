import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ContentPage from 'App/Models/ContentPage'
import Lead from 'App/Models/Lead'
import Env from '@ioc:Adonis/Core/Env'
import LeadValidator from 'App/Validators/LeadValidator'

export default class ContactusesController {
    public async content({ view }: HttpContextContract) {        
        const titlePage = 'Deskripsi page'
        const pageName = 'contact'
        const routeToPage = 'contact_us.index'
        const contentPage = await ContentPage.findByOrFail('page_name', pageName)
        
        return view.render('content-page/index', {
            titlePage, routeToPage, pageName, contentPage
        })
    }
    public async manage({view}: HttpContextContract) {
        const titlePage = 'Leads dari User'
        const contactUs = await Lead.query().orderBy('created_at', 'asc')
        return view.render('contact-us/manage', {titlePage, contactUs})
    }
    public async index({ view }: HttpContextContract) {
        return view.render('contact-us/index')
    }

    public async store({ response, request, }: HttpContextContract) {
        const requestValidated = await request.validate(LeadValidator)

        await Lead.create({
            email: requestValidated.email,
            subject: requestValidated.subject,
            desc: requestValidated.desc
        })

        return response.json({
            'success': true,
            'message': 'Berhasil mengirim pesan ke ' + Env.get('APP_NAME')
        })
    }

    public async update({ }: HttpContextContract) {
    }

    public async destroy({ }: HttpContextContract) {
    }
}
