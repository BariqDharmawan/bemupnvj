import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"
import AboutUs from "App/Models/AboutUs"
import Blog from "App/Models/Blog"
import ContentPage from "App/Models/ContentPage"
import OurContact from "App/Models/OurContact"

export default class NewsController {
    /**
     * portal
     */
    public async portal({ view, request }: HttpContextContract) {
        const ourContact = await OurContact.all()
        const aboutUs = await AboutUs.first()
        const contentPage = await ContentPage.findByOrFail(
            'page_name', ContentPage.pageName[5]
        )

        const portalNews = await Blog.query().where('show_at_page', 'portal-berita')
                                    .paginate(request.input('page', 1), 2)
        
        portalNews.baseUrl('/news-portal')

        return view.render('news/portal', {ourContact, aboutUs, contentPage, portalNews})
    }

    /**
     * async getNews
     */
    public async getNews({ request }: HttpContextContract) {
        const portalNews = await Blog.query().where('show_at_page', 'portal-berita')
                                    .paginate(request.input('page', 1), 2)
        
        portalNews.baseUrl('/news-portal')

        return portalNews
    }
}
