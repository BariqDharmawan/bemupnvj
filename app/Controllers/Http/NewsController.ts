// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";


export default class NewsController {
    /**
     * portal
     */
    public async portal({ view }: HttpContextContract) {
        return view.render('news/portal')
    }
}
