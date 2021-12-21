"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const AboutUs_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/AboutUs"));
const OurMission_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/OurMission"));
const OurContact_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/OurContact"));
const ContentPage_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ContentPage"));
const Helper_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Helper"));
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
const Helpers_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Helpers");
const HomeCover_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/HomeCover"));
class AboutUsController {
    async manageVisionMission({ view }) {
        const appName = Env_1.default.get('APP_NAME');
        const titlePage = 'Our vision mission';
        const aboutUs = await AboutUs_1.default.first();
        const missions = await OurMission_1.default.query().orderBy('order_number', 'asc');
        return view.render('about-us/vision-mission/manage', {
            appName, titlePage, aboutUs, missions
        });
    }
    async visionMission({ view }) {
        const titlePage = 'Visi dan Misi';
        const aboutUs = await AboutUs_1.default.first();
        const missions = await OurMission_1.default.query().orderBy('order_number', 'asc');
        const ourContact = await OurContact_1.default.all();
        const bgHeader = '/assets/img/content/visi-misi-cover.png';
        return view.render('about-us/vision-mission/index', {
            titlePage, aboutUs, missions, ourContact, bgHeader
        });
    }
    async content({ view }) {
        const titlePage = 'Deskripsi page';
        const pageName = 'about-us';
        const routeToPage = 'about_us.index';
        const contentPage = await ContentPage_1.default.findByOrFail('page_name', pageName);
        return view.render('content-page/index', {
            titlePage, routeToPage, pageName, contentPage
        });
    }
    async profile({ view }) {
        const titlePage = 'Tentang Kabinet Kita';
        const aboutUs = await AboutUs_1.default.first();
        return view.render('about-us/profile/index', { titlePage, aboutUs });
    }
    async index({ view }) {
        const titlePage = 'Tentang kami';
        const aboutUs = await AboutUs_1.default.first();
        const primaryCover = await HomeCover_1.default.first().then((cover) => {
            return cover?.filename;
        });
        const contentPage = await ContentPage_1.default.findByOrFail('page_name', 'about-us');
        const ourContact = await OurContact_1.default.all();
        return view.render('about-us/index', {
            titlePage,
            aboutUs,
            contentPage,
            ourContact,
            primaryCover
        });
    }
    async create({}) {
    }
    async store({ request, response }) {
        const inputVision = request.input('our_vision');
        const aboutUs = await AboutUs_1.default.query().select('id').first();
        const updateAboutUs = await AboutUs_1.default.findOrFail(aboutUs?.id);
        if (inputVision) {
            updateAboutUs.our_vision = inputVision;
        }
        await updateAboutUs.save();
        return response.json({
            'success': true,
            'message': 'Successfully update our about us'
        });
    }
    async show({}) {
    }
    async edit({}) {
    }
    async update({ request, response, session }) {
        const changeOurVideo = request.input('know_us_video');
        const changeDesc = request.input('desc');
        const changeLogoCabinet = request.file('file', {
            size: '10mb',
            extnames: ['jpg', 'png', 'gif', 'webp', 'jpeg'],
        });
        const logoFileName = `${Helpers_1.cuid()}.${changeLogoCabinet?.extname}`;
        let notificationUpdate = '';
        const aboutUs = await AboutUs_1.default.firstOrFail();
        if (changeOurVideo) {
            aboutUs.know_us_video = Helper_1.default.getStringAfter(changeOurVideo, 'https://www.youtube.com/watch?v=');
            notificationUpdate = 'video tentang kita';
        }
        else {
            notificationUpdate = 'Detail kabinet';
        }
        aboutUs.cabinet_name = request.input('cabinet_name');
        aboutUs.cabinet_meaning = request.input('cabinet_meaning');
        const pathBanner = '/uploads/cabinet-detail/';
        await changeLogoCabinet?.move(Application_1.default.publicPath(pathBanner), {
            name: logoFileName,
            overwrite: true
        });
        if (changeLogoCabinet) {
            aboutUs.logo = `${pathBanner}/${logoFileName}`;
        }
        await aboutUs.save();
        session.flash('notification', `Berhasil mengubah ${notificationUpdate}`);
        return response.redirect().back();
    }
    async destroy({}) {
    }
}
exports.default = AboutUsController;
//# sourceMappingURL=AboutUsController.js.map