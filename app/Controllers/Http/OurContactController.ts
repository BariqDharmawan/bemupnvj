import Application from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import OurContact from 'App/Models/OurContact';
import OurSocial from 'App/Models/OurSocial';
import UpdateContactValidator from 'App/Validators/UpdateContactValidator';
import { cuid } from '@ioc:Adonis/Core/Helpers'
import Logger from '@ioc:Adonis/Core/Logger'
const fs = require('fs');

export default class OurContactController {
    public async index({ }: HttpContextContract) {
    }

    public async manage({ view }: HttpContextContract) {
        const titlePage = 'Our Contact'
        const platforms = JSON.parse(
            fs.readFileSync(
                Application.publicPath('json/platform-socmed.json')
                , 'utf8')
        )

        const ourSocial = await OurSocial.all()
        const contacts = await OurContact.all()

        return view.render('about-us/our-contact', {
            titlePage,
            platforms,
            ourSocial,
            contacts
        })

    }

    public async create({ }: HttpContextContract) {
    }

    public async store({ }: HttpContextContract) {
    }

    public async show({ }: HttpContextContract) {
    }

    public async edit({ }: HttpContextContract) {
    }

    public async update({ request, response, params }: HttpContextContract) {
        const requestValidated = await request.validate(UpdateContactValidator)
        const getOldContact = await OurContact.findOrFail(params.id)

        getOldContact.info = requestValidated.info
        
        if (requestValidated.logo) {
            const pathLogo = 'uploads/contact'
            const logoName = `${cuid()}.${requestValidated?.logo.extname}`
        
            await requestValidated?.logo.move(Application.publicPath(pathLogo), {
                name: logoName,
                overwrite: true
            })

            getOldContact.logo = `${pathLogo}/${logoName}`
        }
        getOldContact.additional_info = requestValidated?.additional_info ?? ''
        getOldContact.link = OurContact.generateLink(requestValidated.info)

        await getOldContact.save()

        console.log(getOldContact.toJSON())
        
        return response.json({
            'success': true,
            'message': 'Berhasil mengubah contact',
            'data': getOldContact
        })
    }

    public async destroy({ }: HttpContextContract) {
    }
}
