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

        return view.render('about-us/vision-mission', {
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

    public async store({ request, response }: HttpContextContract) {
        const inputVision = request.input('our_vision')
        const aboutUs = await AboutUs.query().select('id').first()
        const updateAboutUs = await AboutUs.findOrFail(aboutUs?.id)

        if (inputVision) {
            updateAboutUs.our_vision = inputVision
        }
        
        await updateAboutUs.save()

        return response.json({
            'success': true,
            'message': 'Successfully update our about us'
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
