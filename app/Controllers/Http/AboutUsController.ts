import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import AboutUs from 'App/Models/AboutUs';
import OurMission from 'App/Models/OurMission';
import OurContact from 'App/Models/OurContact';
import Helper from 'App/Helper';

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

    public async content({ view }: HttpContextContract) {
        const titlePage = 'Konten Tentang Kita'
        const aboutUs = await AboutUs.first()
        const content = await OurContact.query().select('desc_contact_page').first()

        return view.render('about-us/content/index', {titlePage, aboutUs, content})
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

    public async update({ request, response, session }: HttpContextContract) {
        const changeOurVideo = request.input('know_us_video')
        const changeDesc = request.input('desc')
        let notification = ''

        const aboutUs = await AboutUs.firstOrFail()

        if (changeOurVideo) {
            aboutUs.know_us_video = Helper.getStringAfter(
                changeOurVideo, 'https://www.youtube.com/watch?v='
            )
            notification = 'video tentang kita'
        }

        if (changeDesc) {
            aboutUs.desc = changeDesc
            notification = 'Deskripsi mengenai kita'
        }

        await aboutUs.save()
        session.flash('notification', `Berhasil mengubah ${notification}`)
        return response.redirect().back()
    }

    public async destroy({ }: HttpContextContract) {
    }
}
