"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContentPage_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ContentPage"));
const Lead_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Lead"));
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const LeadValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/LeadValidator"));
const AboutUs_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/AboutUs"));
const OurSocial_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/OurSocial"));
const OurContact_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/OurContact"));
class ContactUsController {
    async content({ view }) {
        const titlePage = 'Deskripsi page';
        const pageName = ContentPage_1.default.pageName[3];
        const routeToPage = 'contact_us.index';
        const contentPage = await ContentPage_1.default.findBy('page_name', pageName);
        return view.render('content-page/index', {
            titlePage, routeToPage, pageName, contentPage
        });
    }
    async manage({ view }) {
        const titlePage = 'Leads dari User';
        const contactUs = await Lead_1.default.query().orderBy('created_at', 'asc');
        return view.render('contact-us/manage', { titlePage, contactUs });
    }
    async index({ view }) {
        const aboutUs = await AboutUs_1.default.first();
        const contentPage = await ContentPage_1.default.findByOrFail('page_name', ContentPage_1.default.pageName[3]);
        const ourSocial = await OurSocial_1.default.all();
        const ourContact = await OurContact_1.default.all();
        return view.render('contact-us/index', { aboutUs, contentPage, ourSocial, ourContact });
    }
    async store({ response, request, }) {
        const requestValidated = await request.validate(LeadValidator_1.default);
        await Lead_1.default.create({
            email: requestValidated.email,
            subject: requestValidated.subject,
            desc: requestValidated.desc
        });
        return response.json({
            'success': true,
            'message': 'Berhasil mengirim pesan ke ' + Env_1.default.get('APP_NAME')
        });
    }
    async update({}) {
    }
    async destroy({}) {
    }
}
exports.default = ContactUsController;
//# sourceMappingURL=ContactUsController.js.map