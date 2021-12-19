import Application from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { cuid, string } from '@ioc:Adonis/Core/Helpers'
import Sataset from 'App/Models/Sataset'
import StoreSatasetValidator from 'App/Validators/StoreSatasetValidator'
import AboutUs from 'App/Models/AboutUs'
import ContentPage from 'App/Models/ContentPage'

export default class SatasetController {
  public async manage({view, request}: HttpContextContract) {
    const satasets = await Sataset.query().paginate(request.input('page', 1), 2)
    const titlePage = 'Sataset'
    const contentPage = await ContentPage.findByOrFail(
      'page_name', ContentPage.pageName[6]
    )

    satasets.baseUrl('/satasets/manage')

    return view.render('sataset/manage', {satasets, titlePage})
  }
  public async index({ view }: HttpContextContract) {
    const satasets = await Sataset.all()
    const titlePage = 'Sataset'
    const aboutUs = await AboutUs.first()

    const contentPage = await ContentPage.findByOrFail(
      'page_name', ContentPage.pageName[6]
    )

    return view.render('sataset/index', {satasets, titlePage, aboutUs, contentPage})
  }

  public async create({}: HttpContextContract) {}

  public async store({session, response, request}: HttpContextContract) {
    const requestValidated = await request.validate(StoreSatasetValidator)
    const attachment = requestValidated.file

    let attachmentName: any
    if (attachment) {
      attachmentName = `${cuid()}.${attachment.extname}`
      await attachment.move(Application.publicPath(Sataset.pathAttachment), {
        name: attachmentName,
        overwrite: true
      })
    }

    const addNewSataset = new Sataset()
    addNewSataset.title = requestValidated.title
    addNewSataset.short_desc = requestValidated.short_desc
    if (attachment) {
      addNewSataset.file = `${Sataset.pathAttachment}/${attachmentName}`
    }
    if (requestValidated.is_display) {
      addNewSataset.is_display = requestValidated.is_display
    }
    await addNewSataset.save()

    session.flash('notification', 'Berhasil membuat sataset baru')
    return response.redirect().back()
  }

  public async show({}: HttpContextContract) {}

  public async destroy({response, params, session}: HttpContextContract) {
    const getSataset = await Sataset.findOrFail(params.id)
    await getSataset.delete()

    session.flash('notification', 'Berhasil menghapus sataset')
    return response.redirect().back()
  }
}
