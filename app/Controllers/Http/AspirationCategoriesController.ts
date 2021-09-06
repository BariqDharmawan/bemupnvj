import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AspirationCategory from 'App/Models/AspirationCategory'
import StoreAspirationCategoryValidator from 'App/Validators/StoreAspirationCategoryValidator'

export default class AspirationCategoriesController {

    public async store({ response, session, request }: HttpContextContract) {
        const categoryValidate = await request.validate(StoreAspirationCategoryValidator)
        AspirationCategory.create({
            category: categoryValidate.category
        })

        session.flash('notification', 'Berhasil membuat kategori aspirasi')
        return response.redirect().back()
    }

    public async update({ params, request, session, response }: HttpContextContract) {
        const categoryValidate = await request.validate(StoreAspirationCategoryValidator)
        
        const updateCategory = await AspirationCategory.findOrFail(params.id)
        updateCategory.category = categoryValidate.category
        await updateCategory.save()

        session.flash('notification', 'Berhasil mengubah kategori aspirasi')
        return response.redirect().back()
    }

    public async destroy({ }: HttpContextContract) {
    }
}
