import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Lead from 'App/Models/Lead'
import Env from '@ioc:Adonis/Core/Env'
import LeadValidator from 'App/Validators/LeadValidator'

export default class LeadsController {
    public async index({ view }: HttpContextContract) {
        const titlePage = 'Leads dari User'
        const contactUs = await Lead.query().orderBy('created_at', 'asc')
        return view.render('lead/manage', {contactUs, titlePage})
    }

    public async create({ }: HttpContextContract) {
    }

    public async store({ request, response }: HttpContextContract) {
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

    public async show({ }: HttpContextContract) {
    }

    public async edit({ }: HttpContextContract) {
    }

    public async update({ }: HttpContextContract) {
    }

    public async destroy({ }: HttpContextContract) {
    }
}
