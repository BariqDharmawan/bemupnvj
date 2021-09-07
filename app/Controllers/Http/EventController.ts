// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class EventController {
    /**
     * async past
     */
    public async past({view}: HttpContextContract) {
        return view.render('event/past')
    }

    /**
     * async upcoming
     */
    public async upcoming({view}: HttpContextContract) {
        return view.render('event/upcoming')
    }
}
