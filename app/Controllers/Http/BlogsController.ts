import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BlogCategory from 'App/Models/BlogCategory'
import Blog from 'App/Models/Blog'

export default class BlogsController {
    public async index({ }: HttpContextContract) {
    }

    public async manage({ view }: HttpContextContract) {
        const titlePage = 'Manage konten blog'

        const categories = await BlogCategory.query().preload('blogs')
        const articles = await Blog.all()

        return view.render('blog/manage', { titlePage, categories, articles })
    }

    public async create({ }: HttpContextContract) {
    }

    public async store({ }: HttpContextContract) {
    }

    public async show({ }: HttpContextContract) {
    }

    public async edit({ }: HttpContextContract) {
    }

    public async update({ }: HttpContextContract) {
    }

    public async destroy({ }: HttpContextContract) {
    }
}
