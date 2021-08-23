import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import OurMission from 'App/Models/OurMission'

export default class OurMissionsController {

    /**
     * getMission
     */
    public async getMission({ response }: HttpContextContract) {
        const missions = await OurMission.query().orderBy('order_number', 'asc')
        return missions
    }

    public async store({ request, response }: HttpContextContract) {
        const latestOrderNumber = await OurMission.query().select('order_number')
                                .orderBy('order_number', 'desc').first()
        
        const addMission = OurMission.create({
            content: request.input('content'),
            order_number: (latestOrderNumber?.order_number || 0) + 1
        })

        return response.redirect().back()
    }

    public async show({ }: HttpContextContract) {
    }

    public async edit({ }: HttpContextContract) {
    }

    public async update({ }: HttpContextContract) {
    }

    public async destroy({ params }: HttpContextContract) {
        const getMission = await OurMission.findOrFail(params.id)
        await getMission.delete()
    }
}
