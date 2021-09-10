import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import AboutUs from 'App/Models/AboutUs';
import OurMission from 'App/Models/OurMission';
import OurContact from 'App/Models/OurContact';
import ContentPage from 'App/Models/ContentPage';
import Helper from 'App/Helper';
import Application from '@ioc:Adonis/Core/Application'
import { cuid } from '@ioc:Adonis/Core/Helpers'
import HomeCover from 'App/Models/HomeCover';

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
        const titlePage = 'Deskripsi page'
        const pageName = 'about-us'
        const routeToPage = 'about_us.index'
        const contentPage = await ContentPage.findByOrFail('page_name', pageName)

        return view.render('content-page/index', {
            titlePage, routeToPage, pageName, contentPage
        })
    }

    public async profile({view}: HttpContextContract) {
        const titlePage = 'Tentang Kabinet Kita'
        const aboutUs = await AboutUs.first()

        return view.render('about-us/profile/index', {titlePage, aboutUs})
    }

    public async index({ view }: HttpContextContract) {
        const appName: string = Env.get('APP_NAME');
        const titlePage = 'About Us'

        const aboutUs = await AboutUs.first()
        const primaryCover = await HomeCover.first()
        const contentPage = await ContentPage.findByOrFail('page_name', 'about-us')
        
        const ourContact = await OurContact.all()

        return view.render('about-us/index', {
            appName,
            titlePage,
            aboutUs,
            primaryCover,
            contentPage,
            ourContact
        })
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

    public async update({ request, response, session, params }: HttpContextContract) {
        const changeOurVideo = request.input('know_us_video')
        const changeDesc = request.input('desc')
        const changeLogoCabinet = request.file('file', {
            size: '10mb',
            extnames: ['jpg', 'png', 'gif', 'webp', 'jpeg'],
        })
        const logoFileName = `${cuid()}.${changeLogoCabinet?.extname}`
        let notificationUpdate = ''

        const aboutUs = await AboutUs.firstOrFail()

        if (changeOurVideo) {
            aboutUs.know_us_video = Helper.getStringAfter(
                changeOurVideo, 'https://www.youtube.com/watch?v='
            )
            notificationUpdate = 'video tentang kita'
        }
        else {
            notificationUpdate = 'Detail kabinet'
        }
        aboutUs.cabinet_name = request.input('cabinet_name')
        aboutUs.cabinet_meaning = request.input('cabinet_meaning')

        const pathBanner = '/uploads/cabinet-detail/'
        await changeLogoCabinet?.move(Application.publicPath(pathBanner), {
            name: logoFileName,
            overwrite: true
        })

        if (changeLogoCabinet) {
            aboutUs.logo = `${pathBanner}/${logoFileName}`
        }

        await aboutUs.save()

        // const contentPage = await ContentPage.query()
        //                     .where('page_name', params.page_name)
        //                     .firstOrFail()
        // if (changeDesc) {
        //     contentPage.desc_page = changeDesc
        //     notificationUpdate = 'Deskripsi mengenai kita'
        // }

        session.flash('notification', `Berhasil mengubah ${notificationUpdate}`)
        return response.redirect().back()
    }

    public async destroy({ }: HttpContextContract) {
    }
}
