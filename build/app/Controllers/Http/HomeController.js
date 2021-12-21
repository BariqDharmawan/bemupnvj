"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AboutUs_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/AboutUs"));
const AspirationCategory_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/AspirationCategory"));
const HomeCover_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/HomeCover"));
const OurContact_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/OurContact"));
const Helpers_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Helpers");
const Blog_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Blog"));
const Faculty_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Faculty"));
const Sataset_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Sataset"));
class HomeController {
    async index({ view }) {
        const aboutUs = await AboutUs_1.default.first();
        const ourContact = await OurContact_1.default.all();
        const primaryCover = await HomeCover_1.default.first().then((cover) => {
            return cover?.filename;
        });
        const aspirationCategoryOriginal = await AspirationCategory_1.default.all();
        const aspirationCategory = aspirationCategoryOriginal.map(({ category, id }) => ({
            text: Helpers_1.string.capitalCase(category),
            val: Number(id)
        }));
        const latestNews = await Blog_1.default.query().where('show_at_page', 'home').limit(3);
        const faculties = await Faculty_1.default.query().preload('majors');
        const satasets = await Sataset_1.default.query().where('is_display', true).limit(2);
        return view.render('welcome', {
            aboutUs,
            ourContact,
            primaryCover,
            latestNews,
            aspirationCategory,
            faculties,
            satasets
        });
    }
}
exports.default = HomeController;
//# sourceMappingURL=HomeController.js.map