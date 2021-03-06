import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Helper from "App/Helper";
import AboutUs from "App/Models/AboutUs";
import AspirationCategory from "App/Models/AspirationCategory";
import HomeCover from "App/Models/HomeCover";
import OurContact from "App/Models/OurContact";
import { string } from '@ioc:Adonis/Core/Helpers'
import Blog from "App/Models/Blog";
import Major from "App/Models/Major";
import Faculty from "App/Models/Faculty";
import Sataset from "App/Models/Sataset";

export default class HomeController {
    public async index({ view }: HttpContextContract) {
        const aboutUs = await AboutUs.first()
        const ourContact = await OurContact.all()
        const primaryCover = await HomeCover.first().then((cover) => {
            return cover?.filename
        })

        const aspirationCategoryOriginal = await AspirationCategory.all()

        const aspirationCategory = aspirationCategoryOriginal.map(({ category, id }) => ({
            text: string.capitalCase(category),
            val: Number(id)
        }));

        const latestNews = await Blog.query().where('show_at_page', 'home').limit(3)

        const faculties = await Faculty.query().preload('majors')

        const satasets = await Sataset.query().where('is_display', true).limit(2)

        return view.render('welcome', {
            aboutUs,
            ourContact,
            primaryCover,
            latestNews,
            aspirationCategory,
            faculties,
            satasets
        })
    }
}
