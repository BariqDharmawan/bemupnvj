import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import AboutUs from "App/Models/AboutUs";

export default class HomeController {
    public async index({ view }: HttpContextContract) {
        const aboutUs = await AboutUs.first()
        return view.render('welcome', {aboutUs})
    }
}
