"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AboutUs_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/AboutUs"));
const ContentPage_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ContentPage"));
class ContentPagesController {
    async index({ view }) {
        const titlePage = 'Manage title tiap page';
        const aboutUs = await AboutUs_1.default.first();
        const contentPages = await ContentPage_1.default.all();
        return view.render('content-page/manage', {
            titlePage, contentPages, aboutUs
        });
    }
    async update({ response, params, request }) {
        const pageName = params.page_name;
        const contentPage = await ContentPage_1.default.query()
            .where('page_name', pageName).firstOrFail();
        contentPage.desc_page = request.input('desc_page');
        await contentPage.save();
        return response.json({
            'success': true,
            'message': 'Berhasil mengubah content page ' + pageName
        });
    }
}
exports.default = ContentPagesController;
//# sourceMappingURL=ContentPagesController.js.map