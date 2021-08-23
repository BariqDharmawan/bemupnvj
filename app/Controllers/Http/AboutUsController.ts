import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import AboutUs from 'App/Models/AboutUs';
import OurMission from 'App/Models/OurMission';

export default class AboutUsController {
    /**
     * manage vision
     */
    public async manageVisionMission({ view }: HttpContextContract) {
        const appName: string = Env.get('APP_NAME');
        const titlePage = 'Our vision mission'

        const aboutUs = await AboutUs.first()
        const missions = await OurMission.query().orderBy('order_number', 'asc')

        return view.render('about-us.vision-mission', {
            appName, titlePage, aboutUs, missions
        })
    }

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
