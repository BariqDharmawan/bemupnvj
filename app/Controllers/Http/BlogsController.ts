import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BlogCategory from 'App/Models/BlogCategory'
import Blog from 'App/Models/Blog'
import StoreArticleValidator from 'App/Validators/StoreArticleValidator'
import { cuid } from '@ioc:Adonis/Core/Helpers'
import Application from '@ioc:Adonis/Core/Application'
import { string } from '@ioc:Adonis/Core/Helpers'
import UpdateArticleValidator from 'App/Validators/UpdateArticleValidator'
import { DateTime } from 'luxon'
import AboutUs from 'App/Models/AboutUs'

export default class BlogsController {
    public async index({ }: HttpContextContract) {
    }

    /**
     * async getArticle
     */
    public async getSingleArticle({response, params}: HttpContextContract) {
        const article = await Blog.findOrFail(params.id)
        return response.json({article})
    }

    public async manage({ view }: HttpContextContract) {
        const titlePage = 'Manage konten blog'

        const categories = await BlogCategory.query().preload('blogs')
        const articles = await Blog.all()

        const listPage = Blog.showAtPage

        return view.render('blog/manage', { titlePage, categories, articles, listPage })
    }

    public async store({ response, request, session }: HttpContextContract) {
        const requestValidated = await request.validate(StoreArticleValidator)
        const fileCover = requestValidated.cover
        const fileCoverName = `${cuid()}.${fileCover.extname}`

        await fileCover?.move(Application.publicPath(Blog.pathCover), {
            name: fileCoverName,
            overwrite: true
        })

        const addNewArticle = new Blog()
        addNewArticle.slug = string.dashCase(requestValidated.title)
        addNewArticle.title = requestValidated.title
        addNewArticle.content = requestValidated.content
        addNewArticle.blog_category_id = requestValidated.blog_category_id
        addNewArticle.cover = `${Blog.pathCover}/${fileCoverName}`
        addNewArticle.show_at_page = requestValidated.show_at_page
        addNewArticle.show_until = request.input('show_until')
        await addNewArticle.save()

        session.flash('notification', 'Berhasil membuat artikel baru')
        return response.redirect().back()
    }

    public async show({ view, params }: HttpContextContract) {
      const article = await Blog.findOrFail(params.id)
      const aboutUs = await AboutUs.first()

      return view.render('news/show', {article, aboutUs});
    }

    public async update({ response, request, session, params }: HttpContextContract) {
        const requestValidated = await request.validate(UpdateArticleValidator)

        const article = await Blog.findOrFail(params.id)
        article.title = requestValidated.title
        article.content = requestValidated.content
        if (requestValidated.cover) {
            const fileCover = requestValidated.cover
            const fileCoverName = `${cuid()}.${fileCover.extname}`

            await fileCover?.move(Application.publicPath(Blog.pathCover), {
                name: fileCoverName,
                overwrite: true
            })
            article.cover = fileCoverName
        }
        article.show_at_page = requestValidated.show_at_page
        article.blog_category_id = requestValidated.blog_category_id
        article.show_until = request.input('show_until')
        await article.save()

        const category = await BlogCategory.findOrFail(article.blog_category_id)

        session.flash('tabActive', category.category)
        session.flash('notification', 'Berhasil mengubah artikel')
        return response.redirect().back()
    }

    public async destroy({ params, response, session }: HttpContextContract) {
        const getArticle = await Blog.findOrFail(params.id)
        await getArticle.delete()

        session.flash('notification', 'Berhasil menghapus artikel')
        return response.redirect().back()
    }
}
