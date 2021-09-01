// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import ContentPage from "App/Models/ContentPage";

export default class ContentPagesController {
    /**
     * update content page
     */
    public async update({ response, params, request }: HttpContextContract) {
        const pageName = params.page_name
        const contentPage = await ContentPage.query()
                            .where('page_name', pageName).firstOrFail()
        contentPage.desc_page = request.input('desc_page')
        await contentPage.save()

        return response.json({
            'success': true,
            'message': 'Berhasil mengubah content page ' + pageName
        })
    }
}
