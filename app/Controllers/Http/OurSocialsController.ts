import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import OurSocial from 'App/Models/OurSocial'
import StoreSocialValidationValidator from 'App/Validators/StoreSocialValidator'

export default class OurSocialsController {

    public async store({ request, response }: HttpContextContract) {
        const requestValidated = await request.validate(StoreSocialValidationValidator)

        const platform = request.input('platform')
        let username: string = request.input('username')

        OurSocial.create({
            logo: request.input('logo', 'instagram.png'),
            name: requestValidated.platform,
            username: requestValidated.username,
            color: requestValidated.color,
            url: OurSocial.generateUrl(platform, username)
        })

        return response.json({
            'success': true,
            'message': 'Successfully add new social media',
            'isDirty': true
        })
    }

    public async update({ }: HttpContextContract) {
    }

    public async destroy({ }: HttpContextContract) {
    }
}
