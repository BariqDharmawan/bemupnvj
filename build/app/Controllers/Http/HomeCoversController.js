"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const HomeCover_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/HomeCover"));
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
const Helpers_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Helpers");
let fs = require('fs');
class HomeCoversController {
    async index({ view, request }) {
        const appName = Env_1.default.get('APP_NAME');
        const paths = request.url();
        const titlePage = 'Setup Primary Cover';
        const primaryCover = await HomeCover_1.default.firstOrFail();
        return view.render('primary-cover/index', { appName, paths, titlePage, primaryCover });
    }
    async getCover({ response }) {
        const primaryCover = await HomeCover_1.default.first();
        const primaryCoverToJson = primaryCover?.toJSON();
        return response.json({ primaryCoverToJson });
    }
    async store({ request, response }) {
        const coverImage = request.file('file', {
            size: '20mb',
            extnames: ['jpg', 'png', 'gif', 'webp', 'jpeg'],
        });
        const imgName = `${Helpers_1.cuid()}.${coverImage?.extname}`;
        const pathBanner = 'uploads/home-cover';
        await coverImage?.move(Application_1.default.publicPath(pathBanner), {
            name: imgName,
            overwrite: true
        });
        HomeCover_1.default.create({
            filename: `${pathBanner}/${imgName}`
        });
        return response.json({
            'success': true,
            'message': 'Successfully update cover'
        });
    }
    async destroy({ response, params }) {
        const getOldBanner = await HomeCover_1.default.findOrFail(params.id);
        try {
            fs.unlinkSync(Application_1.default.publicPath(getOldBanner.filename));
        }
        catch (error) { }
        await getOldBanner.delete();
        return response.json({
            'success': true,
            'message': 'Successfully delete cover'
        });
    }
}
exports.default = HomeCoversController;
//# sourceMappingURL=HomeCoversController.js.map