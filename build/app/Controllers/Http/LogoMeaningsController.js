"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AboutUs_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/AboutUs"));
const OurContact_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/OurContact"));
const LogoMeaning_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/LogoMeaning"));
const StoreLogoMeaningValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/StoreLogoMeaningValidator"));
const Helpers_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Helpers");
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
class LogoMeaningsController {
    async index({ view }) {
        const aboutUs = await AboutUs_1.default.first();
        const ourContact = await OurContact_1.default.all();
        const logoMeanings = await LogoMeaning_1.default.all();
        const titlePage = `Makna Logo`;
        const bgHeader = '/assets/img/content/visi-misi-cover.png';
        return view.render('about-us/logo/index', {
            aboutUs, ourContact, titlePage, bgHeader, logoMeanings
        });
    }
    async manage({ view }) {
        const titlePage = 'Makna Logo';
        const aboutUs = await AboutUs_1.default.first();
        const logoMeanings = await LogoMeaning_1.default.all();
        return view.render('about-us/logo/manage', { titlePage, aboutUs, logoMeanings });
    }
    async create({}) {
    }
    async store({ request, response }) {
        const requestValidated = await request.validate(StoreLogoMeaningValidator_1.default);
        const logoName = `${Helpers_1.cuid()}.${requestValidated.img.extname}`;
        await requestValidated.img?.move(Application_1.default.publicPath('/uploads/logo-meaning'), {
            name: logoName,
            overwrite: true
        });
        const addMeaning = LogoMeaning_1.default.create({
            title: requestValidated.title,
            desc: requestValidated.desc,
            img: logoName
        });
        return response.json({
            'success': true,
            'message': 'Berhasil menambah makna',
            'data': addMeaning
        });
    }
    async destroy({ params, response, session }) {
        const logoMeaning = await LogoMeaning_1.default.findOrFail(params.id);
        await logoMeaning.delete();
        session.flash('notification', 'Berhasil menghapus');
        return response.redirect().back();
    }
}
exports.default = LogoMeaningsController;
//# sourceMappingURL=LogoMeaningsController.js.map