import Application from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { cuid, string } from '@ioc:Adonis/Core/Helpers'
import Sataset from 'App/Models/Sataset'
import StoreSatasetValidator from 'App/Validators/StoreSatasetValidator'

export default class SatasetController {
  public async manage({view, request}: HttpContextContract) {
    const satasets = await Sataset.all()
    const titlePage = 'Sataset'


    const currentPath = request.completeUrl().replace('sataset/manage', '')
    // return Application.publicPath('uploads/file/sample.pdf')

    return view.render('sataset/manage', {satasets, titlePage, currentPath})
  }
  public async index({}: HttpContextContract) {}

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
