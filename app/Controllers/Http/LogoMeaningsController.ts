import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AboutUs from "App/Models/AboutUs"
import OurContact from 'App/Models/OurContact'
import LogoMeanings from 'App/Models/LogoMeaning'
import StoreLogoMeaningValidator from 'App/Validators/StoreLogoMeaningValidator'
import { cuid } from '@ioc:Adonis/Core/Helpers'
import Application from '@ioc:Adonis/Core/Application'

export default class LogoMeaningsController {
    public async index({ view }: HttpContextContract) {
        const aboutUs = await AboutUs.first()
        const ourContact = await OurContact.all()
        const logoMeanings = await LogoMeanings.all()

        const titlePage = `Makna Logo`
        const bgHeader = '/assets/img/content/visi-misi-cover.png'

        return view.render('about-us/logo/index', {
            aboutUs, ourContact, titlePage, bgHeader, logoMeanings
        })
    }

    public async manage({ view }: HttpContextContract) {
        const titlePage = 'Makna Logo'
        const aboutUs = await AboutUs.first()
        const logoMeanings = await LogoMeanings.all()

        return view.render('about-us/logo/manage', {titlePage, aboutUs, logoMeanings})
    }

    public async create({ }: HttpContextContract) {
    }

    public async store({ request, response }: HttpContextContract) {
        const requestValidated = await request.validate(StoreLogoMeaningValidator)

        const logoName = `${cuid()}.${requestValidated.img.extname}`
        await requestValidated.img?.move(Application.publicPath('/uploads/logo-meaning'), {
            name: logoName,
            overwrite: true
        })

        const addMeaning = LogoMeanings.create({
            title: requestValidated.title,
            desc: requestValidated.desc,
            img: logoName
        })

        return response.json({
            'success': true,
            'message': 'Berhasil menambah makna',
            'data': addMeaning
        })
    }

    public async destroy({ params, response, session }: HttpContextContract) {
      const logoMeaning = await LogoMeanings.findOrFail(params.id)
      await logoMeaning.delete()

      session.flash('notification', 'Berhasil menghapus')
      return response.redirect().back()
    }
}
