// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class StudentInfoController {
    /**
     * index
     */
    public async index({view}: HttpContextContract) {
        return view.render('student-info/index')
    }

    /**
     * scholareer
     */
    public async scholareer({view}: HttpContextContract) {
        return view.render('student-info/scholareer')
    }
}
