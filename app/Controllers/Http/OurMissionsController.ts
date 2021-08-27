import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import OurMission from 'App/Models/OurMission'

export default class OurMissionsController {

    /**
     * getMission
     */
    public async getMission({}: HttpContextContract) {
        const missions = await OurMission.query().orderBy('order_number', 'asc')
        return missions
    }

    public async store({ request, response }: HttpContextContract) {
        const latestOrderNumber = await OurMission.query().select('order_number')
                                .orderBy('order_number', 'desc').first()
        
        OurMission.create({
            content: request.input('content'),
            order_number: (latestOrderNumber?.order_number || 0) + 1
        })

        return response.redirect().back()
    }

    public async show({ }: HttpContextContract) {
    }

    public async edit({ }: HttpContextContract) {
    }

    public async update({request, params, response}: HttpContextContract) {
        const missionToEdit = await OurMission.findOrFail(params.id)
        missionToEdit.content = request.input('content')

        let isDirty = true,
            message = 'Successfully update mission content'

        if (missionToEdit.$isDirty) {
            await missionToEdit.save()
        }
        else {
            isDirty = false
            message = 'Nothing gonna edit'
        }

        return response.json({
            'success': true,
            'message': message,
            'isDirty': isDirty
        })
    }

    /**
     * updateAllList
     */
    public async updateAllList({request, response}: HttpContextContract) {
        const listUpdatedId = Array.from(request.body().updated_list_Id).map(id => {
            return Number(id)
        })

        for (let i = 0; i < listUpdatedId.length; i++) {
            const eachMission = await OurMission.findOrFail(listUpdatedId[i]);
            eachMission.order_number = i + 1
            await eachMission.save()
            console.log(eachMission.order_number)
        }


        return response.json({
            'success': true,
            'message': 'Successfully update ordering missions'
        })
    }

    public async destroy({ params }: HttpContextContract) {
        const getMission = await OurMission.findOrFail(params.id)
        await getMission.delete()
    }
}
