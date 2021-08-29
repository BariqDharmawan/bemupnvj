import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import OurSocial from 'App/Models/OurSocial'
import StoreSocialValidationValidator from 'App/Validators/StoreSocialValidator'
import UpdateSocialValidator from 'App/Validators/UpdateSocialValidator'
import Application from '@ioc:Adonis/Core/Application'
import { cuid } from '@ioc:Adonis/Core/Helpers'
import fs from 'fs'

export default class OurSocialsController {

    public async store({ request, response, session }: HttpContextContract) {
        const requestValidated = await request.validate(StoreSocialValidationValidator)
        const platform = request.input('platform')
        let username: string = request.input('username')

        let logoName = `${cuid()}.${requestValidated.logo.extname}`
        let pathLogo = '/uploads/logo'
    
        await requestValidated?.logo.move(Application.publicPath(pathLogo), {
            name: logoName,
            overwrite: true
        })

        const addSocial = await OurSocial.create({
            name: requestValidated.platform,
            username: requestValidated.username,
            logo: `${pathLogo}/${logoName}`,
            color: requestValidated.color,
            url: OurSocial.generateUrl(platform, username)
        })

        session.flash('notification', 'Successfully add new social media ' + addSocial.name)
        
        return response.redirect().back()
    }

    public async update({ params, response, request, session }: HttpContextContract) {
        const requestValidated = await request.validate(UpdateSocialValidator)
        const platform = request.input('platform')
        const username = request.input('username')
        
        const getSocial = await OurSocial.findOrFail(params.id)
        if (requestValidated.logo) {
            let logoName = `${cuid()}.${requestValidated.logo.extname}`
            let pathLogo = '/uploads/logo'
    
            await requestValidated?.logo.move(Application.publicPath(pathLogo), {
                name: logoName,
                overwrite: true
            })
            getSocial.logo = `${pathLogo}/${logoName}`
        }
        getSocial.name = platform
        getSocial.username = username
        getSocial.color = request.input('color')
        getSocial.url = OurSocial.generateUrl(platform, username)

        await getSocial.save()
        session.flash('notification', 'Successfully update our ' + getSocial.name)
        return response.redirect().back()
    }

    public async destroy({ params, response }: HttpContextContract) {
        const getSocial = await OurSocial.findOrFail(params.id)
        await getSocial.delete()

        return response.json({
            'success': true,
            'message': 'Successfully delete social media'
        })
    }
}
