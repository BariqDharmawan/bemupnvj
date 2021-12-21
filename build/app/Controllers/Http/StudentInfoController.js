"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AboutUs_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/AboutUs"));
const Blog_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Blog"));
const ContentPage_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ContentPage"));
const OurContact_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/OurContact"));
class StudentInfoController {
    async index({ view, request }) {
        const titlePage = 'Program Kerja Mardhika';
        const aboutUs = await AboutUs_1.default.first();
        const contentPage = await ContentPage_1.default.firstOrFail();
        const infoBeasiswa = await Blog_1.default.query().where('show_at_page', 'info-mahasiswa')
            .paginate(request.input('page', 1), 2);
        const ourContact = await OurContact_1.default.all();
        return view.render('student-info/index', {
            titlePage, aboutUs, contentPage, infoBeasiswa, ourContact
        });
    }
    async getInfoBeasiswa({ request }) {
        const infoBeasiswa = await Blog_1.default.query().where('show_at_page', 'info-mahasiswa')
            .paginate(request.input('page', 1), 2);
        infoBeasiswa.baseUrl('/news-portal');
        return infoBeasiswa;
    }
    async scholareer({ view }) {
        return view.render('student-info/scholareer');
    }
}
exports.default = StudentInfoController;
//# sourceMappingURL=StudentInfoController.js.map