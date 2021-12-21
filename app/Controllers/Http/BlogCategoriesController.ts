import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BlogCategory from 'App/Models/BlogCategory'
import UpdateBlogCategoryValidator from 'App/Validators/UpdateBlogCategoryValidator'

export default class BlogCategoriesController {
    public async index({ }: HttpContextContract) {
    }
    public async store({ request, response, session }: HttpContextContract) {
      const addNewCategory = new BlogCategory()
        addNewCategory.category = request.input('category')

        session.flash('notification', "Berhasil menambah kategori")
        await addNewCategory.save()

        return response.redirect().back()
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
