import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AboutUs from "App/Models/AboutUs";
import OurContact from 'App/Models/OurContact';

export default class LogoMeaningsController {
  public async index ({view}: HttpContextContract) {
      const aboutUs = await AboutUs.first()
      const titlePage = `Makna Logo`
      const ourContact = await OurContact.all()

      const bgHeader = '/assets/img/content/visi-misi-cover.png'

      return view.render('about-us/logo/index', {aboutUs, ourContact, titlePage, bgHeader})
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({}: HttpContextContract) {
  }

  public async show ({}: HttpContextContract) {
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
