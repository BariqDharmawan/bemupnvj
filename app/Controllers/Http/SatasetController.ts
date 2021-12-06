import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sataset from 'App/Models/Sataset'

export default class SatasetController {
  public async manage({view, request}: HttpContextContract) {
    const satasets = await Sataset.all()
    const titlePage = 'Sataset'

    const currentPath = request.completeUrl().replace('sataset/manage', '')

    return view.render('sataset/manage', {satasets, titlePage, currentPath})
  }
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
