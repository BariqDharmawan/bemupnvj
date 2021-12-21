"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
const OurContact_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/OurContact"));
const OurSocial_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/OurSocial"));
const UpdateContactValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UpdateContactValidator"));
const Helpers_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Helpers");
const fs = require('fs');
class OurContactController {
    async index({}) {
    }
    async manage({ view }) {
        const titlePage = 'Our Contact';
        const platforms = JSON.parse(fs.readFileSync(Application_1.default.publicPath('json/platform-socmed.json'), 'utf8'));
        const ourSocial = await OurSocial_1.default.all();
        const contacts = await OurContact_1.default.all();
        return view.render('about-us/our-contact', {
            titlePage,
            platforms,
            ourSocial,
            contacts
        });
    }
    async create({}) {
    }
    async store({}) {
    }
    async show({}) {
    }
    async edit({}) {
    }
    async update({ request, response, params }) {
        const requestValidated = await request.validate(UpdateContactValidator_1.default);
        const getOldContact = await OurContact_1.default.findOrFail(params.id);
        getOldContact.info = requestValidated.info;
        if (requestValidated.logo) {
            const pathLogo = 'uploads/contact';
            const logoName = `${Helpers_1.cuid()}.${requestValidated?.logo.extname}`;
            await requestValidated?.logo.move(Application_1.default.publicPath(pathLogo), {
                name: logoName,
                overwrite: true
            });
            getOldContact.logo = `${pathLogo}/${logoName}`;
        }
        getOldContact.additional_info = requestValidated?.additional_info ?? '';
        getOldContact.link = OurContact_1.default.generateLink(requestValidated.info);
        await getOldContact.save();
        console.log(getOldContact.toJSON());
        return response.json({
            'success': true,
            'message': 'Berhasil mengubah contact',
            'data': getOldContact
        });
    }
    async destroy({}) {
    }
}
exports.default = OurContactController;
//# sourceMappingURL=OurContactController.js.map