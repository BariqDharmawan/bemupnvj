import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BlogCategory from 'App/Models/BlogCategory'
import UpdateBlogCategoryValidator from 'App/Validators/UpdateBlogCategoryValidator'

export default class BlogCategoriesController {
    public async index({ }: HttpContextContract) {
    }

    public async create({ }: HttpContextContract) {
    }

    public async store({ }: HttpContextContract) {
    }

    public async show({ }: HttpContextContract) {
    }

    public async edit({ }: HttpContextContract) {
    }

    public async update({ params, request, response, session }: HttpContextContract) {
        const validateCategory = await request.validate(UpdateBlogCategoryValidator)
        
        const updateCategory = await BlogCategory.findOrFail(params.id)
        updateCategory.category = validateCategory.category
        await updateCategory.save()

        session.flash('notification', "Berhasil mengubah kategori")

        return response.redirect().back()
    }

    public async destroy({ }: HttpContextContract) {
    }
}
