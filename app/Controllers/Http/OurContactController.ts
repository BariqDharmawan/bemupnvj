import Application from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import OurSocial from 'App/Models/OurSocial';
const fs = require('fs');

export default class OurContactController {
  public async index ({}: HttpContextContract) {
  }

  public async manage({view}: HttpContextContract) {
        const titlePage = 'Our Contact'
        const platforms = JSON.parse(
            fs.readFileSync(
                Application.publicPath('json/platform-socmed.json')
            , 'utf8')
        )

        const ourSocial = await OurSocial.all()

        console.log(ourSocial)

        return view.render('about-us/our-contact', {titlePage, platforms, ourSocial})

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
