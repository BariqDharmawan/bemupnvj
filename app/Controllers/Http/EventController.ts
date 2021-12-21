// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Helper from "App/Helper";
import AboutUs from "App/Models/AboutUs";
import Blog from "App/Models/Blog";
import ContentPage from "App/Models/ContentPage";
import OurContact from "App/Models/OurContact";
import { DateTime } from "luxon";

export default class EventController {
    /**
     * async past
     */
    public async past({view, request}: HttpContextContract) {
        const ourContact = await OurContact.all()
        const aboutUs = await AboutUs.first()
        const titlePage = 'Past Events'
        const contentPage = await ContentPage.findByOrFail(
            'page_name', ContentPage.pageName[1]
        )
        let pastEvents = await Blog.query().where('show_at_page', 'events')
                                    .preload('blogCategory')
                                    .where('show_until', '<', new Date())
                                    .paginate(request.input('page', 1), 6)

        // return pastEvents

        return view.render('event/past', {
            ourContact, aboutUs, titlePage, contentPage, pastEvents
        })
    }

    /**
     * async past
     */
     public async getPast({request}: HttpContextContract) {
        let pastEvents = await Blog.query().where('show_at_page', 'events')
                                    .preload('blogCategory')
                                    .where('show_until', '<', new Date())
                                    .paginate(request.input('page', 1), 6)

        return pastEvents
    }

    /**
     * async past
     */
     public async getUpcoming({request}: HttpContextContract) {
      const upcomingEvents = await Blog.query().where('show_at_page', 'events')
                                        .preload('blogCategory')
                                        .where(
                                            'show_until', '>=', Helper.getCurrentDatetime()
                                        )
                                        .orderBy('created_at', 'desc')
                                        .paginate(request.input('page', 1), 6)

      return upcomingEvents
  }

    /**
     * async upcoming
     */
    public async upcoming({view, request}: HttpContextContract) {
        const aboutUs = await AboutUs.first()
        const ourContact = await OurContact.all()
        const contentPage = await ContentPage.findByOrFail(
            'page_name', ContentPage.pageName[2]
        )

        const upcomingEvents = await Blog.query().where('show_at_page', 'events')
                                        .preload('blogCategory')
                                        .where(
                                            'show_until', '>=', Helper.getCurrentDatetime()
                                        )
                                        .orderBy('created_at', 'desc')
                                        .paginate(request.input('page', 1), 6)

        return view.render('event/upcoming', {
            aboutUs, upcomingEvents, ourContact, contentPage
        })
    }
}
