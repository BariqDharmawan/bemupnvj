"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OurSocial_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/OurSocial"));
const StoreSocialValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/StoreSocialValidator"));
const UpdateSocialValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UpdateSocialValidator"));
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
const Helpers_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Helpers");
class OurSocialsController {
    async store({ request, response, session }) {
        const requestValidated = await request.validate(StoreSocialValidator_1.default);
        const platform = request.input('platform');
        let username = request.input('username');
        let logoName = `${Helpers_1.cuid()}.${requestValidated.logo.extname}`;
        let pathLogo = '/uploads/logo';
        await requestValidated?.logo.move(Application_1.default.publicPath(pathLogo), {
            name: logoName,
            overwrite: true
        });
        const addSocial = await OurSocial_1.default.create({
            name: requestValidated.platform,
            username: requestValidated.username,
            logo: `${pathLogo}/${logoName}`,
            color: requestValidated.color,
            url: OurSocial_1.default.generateUrl(platform, username)
        });
        session.flash('notification', 'Successfully add new social media ' + addSocial.name);
        return response.redirect().back();
    }
    async update({ params, response, request, session }) {
        const requestValidated = await request.validate(UpdateSocialValidator_1.default);
        const platform = request.input('platform');
        const username = request.input('username');
        const getSocial = await OurSocial_1.default.findOrFail(params.id);
        if (requestValidated.logo) {
            const pathLogo = '/uploads/logo';
            const logoName = `${Helpers_1.cuid()}.${requestValidated.logo.extname}`;
            await requestValidated?.logo.move(Application_1.default.publicPath(pathLogo), {
                name: logoName,
                overwrite: true
            });
            getSocial.logo = `${pathLogo}/${logoName}`;
        }
        getSocial.name = platform;
        getSocial.username = username;
        getSocial.color = request.input('color');
        getSocial.url = OurSocial_1.default.generateUrl(platform, username);
        await getSocial.save();
        session.flash('notification', 'Successfully update our ' + getSocial.name);
        return response.redirect().back();
    }
    async destroy({ params, response }) {
        const getSocial = await OurSocial_1.default.findOrFail(params.id);
        await getSocial.delete();
        return response.json({
            'success': true,
            'message': 'Successfully delete social media'
        });
    }
}
exports.default = OurSocialsController;
//# sourceMappingURL=OurSocialsController.js.map