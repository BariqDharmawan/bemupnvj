import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Aspiration from 'App/Models/Aspiration'
import AspirationCategory from 'App/Models/AspirationCategory'
import AspirationValidator from 'App/Validators/AspirationValidator'

export default class AspirationsController {
    
    public async manage({ view }: HttpContextContract) {
        const titlePage = 'Aspirasi Dari Mahasiswa'
        const aspirationCategory = await AspirationCategory.query().preload('aspirations')
        return view.render('aspiration/manage', {titlePage, aspirationCategory})
    }
    public async index({ }: HttpContextContract) {
    }

    public async create({ }: HttpContextContract) {
    }

    public async store({ response, request }: HttpContextContract) {
        const validateAspirations = await request.validate(AspirationValidator)
        const sendAspiration = await Aspiration.create({
            name: validateAspirations.name + ' - ' + validateAspirations.major,
            email: validateAspirations.email,
            aspiration_category_id: validateAspirations.aspiration_category_id,
            message: validateAspirations.message
        })

        return response.json({
            'success': true,
            'message': 'Berhasil mengirim aspirasi!',
            'data': sendAspiration
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
