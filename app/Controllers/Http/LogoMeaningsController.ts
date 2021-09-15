import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AboutUs from "App/Models/AboutUs"
import OurContact from 'App/Models/OurContact'
import LogoMeanings from 'App/Models/LogoMeaning'

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
