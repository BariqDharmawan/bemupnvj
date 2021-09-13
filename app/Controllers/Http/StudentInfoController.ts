// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import AboutUs from "App/Models/AboutUs";
import Blog from "App/Models/Blog";
import ContentPage from "App/Models/ContentPage";
import OurContact from "App/Models/OurContact";

export default class StudentInfoController {
    
    public async index({view}: HttpContextContract) {
        const titlePage = 'Info Mahasiswa'
        const aboutUs = await AboutUs.first()
        const contentPage = await ContentPage.firstOrFail()
        const infoBeasiswa = await Blog.query().where('show_at_page', 'info-mahasiswa')
        const ourContact = await OurContact.all()

        return view.render('student-info/index', {
            titlePage, aboutUs, contentPage, infoBeasiswa, ourContact
        })
    }

    public async scholareer({view}: HttpContextContract) {
        return view.render('student-info/scholareer')
    }
}
