"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AboutUs_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/AboutUs"));
const Blog_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Blog"));
const ContentPage_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ContentPage"));
const OurContact_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/OurContact"));
class NewsController {
    async portal({ view, request }) {
        const ourContact = await OurContact_1.default.all();
        const aboutUs = await AboutUs_1.default.first();
        const contentPage = await ContentPage_1.default.findByOrFail('page_name', ContentPage_1.default.pageName[5]);
        const portalNews = await Blog_1.default.query().where('show_at_page', 'portal-berita')
            .paginate(request.input('page', 1), 2);
        portalNews.baseUrl('/news-portal');
        return view.render('news/portal', { ourContact, aboutUs, contentPage, portalNews });
    }
    async getNews({ request }) {
        const portalNews = await Blog_1.default.query().where('show_at_page', 'portal-berita')
            .paginate(request.input('page', 1), 2);
        portalNews.baseUrl('/news-portal');
        return portalNews;
    }
}
exports.default = NewsController;
//# sourceMappingURL=NewsController.js.map