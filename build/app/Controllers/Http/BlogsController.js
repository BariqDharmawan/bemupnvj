"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BlogCategory_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/BlogCategory"));
const Blog_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Blog"));
const StoreArticleValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/StoreArticleValidator"));
const Helpers_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Helpers");
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
const Helpers_2 = global[Symbol.for('ioc.use')]("Adonis/Core/Helpers");
const UpdateArticleValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UpdateArticleValidator"));
const AboutUs_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/AboutUs"));
class BlogsController {
    async index({}) {
    }
    async getSingleArticle({ response, params }) {
        const article = await Blog_1.default.findOrFail(params.id);
        return response.json({ article });
    }
    async manage({ view }) {
        const titlePage = 'Manage konten blog';
        const categories = await BlogCategory_1.default.query().preload('blogs');
        const articles = await Blog_1.default.all();
        const listPage = Blog_1.default.showAtPage;
        return view.render('blog/manage', { titlePage, categories, articles, listPage });
    }
    async store({ response, request, session }) {
        const requestValidated = await request.validate(StoreArticleValidator_1.default);
        const fileCover = requestValidated.cover;
        const fileCoverName = `${Helpers_1.cuid()}.${fileCover.extname}`;
        await fileCover?.move(Application_1.default.publicPath(Blog_1.default.pathCover), {
            name: fileCoverName,
            overwrite: true
        });
        const addNewArticle = new Blog_1.default();
        addNewArticle.slug = Helpers_2.string.dashCase(requestValidated.title);
        addNewArticle.title = requestValidated.title;
        addNewArticle.content = requestValidated.content;
        addNewArticle.blog_category_id = requestValidated.blog_category_id;
        addNewArticle.cover = `${Blog_1.default.pathCover}/${fileCoverName}`;
        addNewArticle.show_at_page = requestValidated.show_at_page;
        addNewArticle.show_until = request.input('show_until');
        await addNewArticle.save();
        session.flash('notification', 'Berhasil membuat artikel baru');
        return response.redirect().back();
    }
    async show({ view, params }) {
        const article = await Blog_1.default.findOrFail(params.id);
        const aboutUs = await AboutUs_1.default.first();
        return view.render('news/show', { article, aboutUs });
    }
    async update({ response, request, session, params }) {
        const requestValidated = await request.validate(UpdateArticleValidator_1.default);
        const article = await Blog_1.default.findOrFail(params.id);
        article.title = requestValidated.title;
        article.content = requestValidated.content;
        if (requestValidated.cover) {
            const fileCover = requestValidated.cover;
            const fileCoverName = `${Helpers_1.cuid()}.${fileCover.extname}`;
            await fileCover?.move(Application_1.default.publicPath(Blog_1.default.pathCover), {
                name: fileCoverName,
                overwrite: true
            });
            article.cover = fileCoverName;
        }
        article.show_at_page = requestValidated.show_at_page;
        article.blog_category_id = requestValidated.blog_category_id;
        article.show_until = request.input('show_untill', null);
        await article.save();
        const category = await BlogCategory_1.default.findOrFail(article.blog_category_id);
        session.flash('tabActive', category.category);
        session.flash('notification', 'Berhasil mengubah artikel');
        return response.redirect().back();
    }
    async destroy({ params, response, session }) {
        const getArticle = await Blog_1.default.findOrFail(params.id);
        await getArticle.delete();
        session.flash('notification', 'Berhasil menghapus artikel');
        return response.redirect().back();
    }
}
exports.default = BlogsController;
//# sourceMappingURL=BlogsController.js.map