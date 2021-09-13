// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import AboutUs from "App/Models/AboutUs";
import Blog from "App/Models/Blog";
import ContentPage from "App/Models/ContentPage";
import OurContact from "App/Models/OurContact";

export default class EventController {
    /**
     * async past
     */
    public async past({view}: HttpContextContract) {
        const ourContact = await OurContact.all()
        const aboutUs = await AboutUs.first()
        const titlePage = 'Past Events'
        const contentPage = await ContentPage.findByOrFail('page_name', 'past-events')
        let pastEvents = await Blog.query().where('show_at_page', 'events')
                                    .preload('blogCategory')
                                    .where('show_until', '<', new Date())

        return view.render('event/past', {
            ourContact, aboutUs, titlePage, contentPage, pastEvents
        })
    }

    /**
     * async upcoming
     */
    public async upcoming({view}: HttpContextContract) {
        return view.render('event/upcoming')
    }
}
