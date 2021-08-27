import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import HomeCover from 'App/Models/HomeCover'
import Application from '@ioc:Adonis/Core/Application'
import { cuid } from '@ioc:Adonis/Core/Helpers'

let fs = require('fs')

export default class HomeCoversController {
    public async index({ view, request }: HttpContextContract) {

        const appName = Env.get('APP_NAME')
        const paths: string = request.url()
        const titlePage = 'Setup Primary Cover'

        const primaryCover = await HomeCover.firstOrFail()

        return view.render('primary-cover/index', { appName, paths, titlePage, primaryCover })

    }

    public async getCover({}: HttpContextContract) {
        const primaryCover = await HomeCover.first()
        const primaryCoverToJson = primaryCover?.toJSON()

        return primaryCoverToJson
    }

    public async store({ request, response }: HttpContextContract) {
        const coverImage = request.file('file', {
            size: '20mb',
            extnames: ['jpg', 'png', 'gif', 'webp', 'jpeg'],
        })

        const imgName = `${cuid()}.${coverImage?.extname}`
        const pathBanner = 'uploads/home-cover'

        await coverImage?.move(Application.publicPath(pathBanner), {
            name: imgName,
            overwrite: true
        })

        HomeCover.create({
            filename:  `${pathBanner}/${imgName}`
        })

        return response.json({
            'success': true,
            'message': 'Successfully update cover'
        })

    }

    public async destroy({ params }: HttpContextContract) {
        const getOldBanner = await HomeCover.findOrFail(params.id)

        try {
            fs.unlinkSync(Application.publicPath(getOldBanner.filename))
        } catch (error) {}

        await getOldBanner.delete()
    }
}
