"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
const Helpers_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Helpers");
const Sataset_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Sataset"));
const StoreSatasetValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/StoreSatasetValidator"));
const AboutUs_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/AboutUs"));
const ContentPage_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ContentPage"));
const OurContact_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/OurContact"));
class SatasetController {
    async manage({ view, request }) {
        const satasets = await Sataset_1.default.query().paginate(request.input('page', 1), 2);
        const titlePage = 'Sataset';
        const contentPage = await ContentPage_1.default.findByOrFail('page_name', ContentPage_1.default.pageName[6]);
        satasets.baseUrl('/satasets/manage');
        return view.render('sataset/manage', { satasets, titlePage });
    }
    async index({ view }) {
        const satasets = await Sataset_1.default.all();
        const titlePage = 'Sataset';
        const aboutUs = await AboutUs_1.default.first();
        const ourContact = await OurContact_1.default.all();
        const contentPage = await ContentPage_1.default.findByOrFail('page_name', ContentPage_1.default.pageName[6]);
        return view.render('sataset/index', { satasets, titlePage, aboutUs, contentPage, ourContact });
    }
    async create({}) { }
    async store({ session, response, request }) {
        const requestValidated = await request.validate(StoreSatasetValidator_1.default);
        const attachment = requestValidated.file;
        let attachmentName;
        if (attachment) {
            attachmentName = `${Helpers_1.cuid()}.${attachment.extname}`;
            await attachment.move(Application_1.default.publicPath(Sataset_1.default.pathAttachment), {
                name: attachmentName,
                overwrite: true
            });
        }
        const addNewSataset = new Sataset_1.default();
        addNewSataset.title = requestValidated.title;
        addNewSataset.short_desc = requestValidated.short_desc;
        if (attachment) {
            addNewSataset.file = `${Sataset_1.default.pathAttachment}/${attachmentName}`;
        }
        if (requestValidated.is_display) {
            addNewSataset.is_display = requestValidated.is_display;
        }
        await addNewSataset.save();
        session.flash('notification', 'Berhasil membuat sataset baru');
        return response.redirect().back();
    }
    async show({}) { }
    async destroy({ response, params, session }) {
        const getSataset = await Sataset_1.default.findOrFail(params.id);
        await getSataset.delete();
        session.flash('notification', 'Berhasil menghapus sataset');
        return response.redirect().back();
    }
}
exports.default = SatasetController;
//# sourceMappingURL=SatasetController.js.map