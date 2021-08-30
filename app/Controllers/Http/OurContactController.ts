import Application from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import OurContact from 'App/Models/OurContact';
import OurSocial from 'App/Models/OurSocial';
import UpdateContactValidator from 'App/Validators/UpdateContactValidator';
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
        const ourContact = await OurContact.first()
        // return ourContact

        return view.render('about-us/our-contact', {
            titlePage,
            platforms,
            ourSocial,
            ourContact
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

    public async update({ request, response }: HttpContextContract) {
        const requestValidated = await request.validate(UpdateContactValidator)

        const newAddress = request.input('address')
        const newEmail = request.input('email')
        const newTelephone = request.input('telephone')

        const getOldContact = await OurContact.firstOrFail()

        const isAddressChange = getOldContact.address == newAddress
        const isEmailChange = getOldContact.email == newEmail
        const isTelephoneChange = getOldContact.telephone == newTelephone

        let notification = ''
        if (isAddressChange) {
            notification = 'alamat'
        }
        else if (isEmailChange) {
            notification = 'email'
        }
        else if (isTelephoneChange) {
            notification = 'telephone'
        }
        else if (isAddressChange && isEmailChange && isTelephoneChange) {
            notification = 'seluruh kontak'
        }
        else {
            notification = 'deskripsi di page /contact-us'
        }

        if (newAddress) {
            getOldContact.address = newAddress
            getOldContact.embed_map = request.input('embed_map')
        }

        if (newEmail) {
            getOldContact.email = newEmail
        }

        if (newTelephone) {
            getOldContact.telephone = newTelephone
        }
        

        await getOldContact.save()
        
        return response.json({
            'success': true,
            'message': 'Berhasil mengubah ' + notification
        })
    }

    public async destroy({ }: HttpContextContract) {
    }
}
