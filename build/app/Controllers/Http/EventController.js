"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Helper_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Helper"));
const AboutUs_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/AboutUs"));
const Blog_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Blog"));
const ContentPage_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ContentPage"));
const OurContact_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/OurContact"));
class EventController {
    async past({ view, request }) {
        const ourContact = await OurContact_1.default.all();
        const aboutUs = await AboutUs_1.default.first();
        const titlePage = 'Past Events';
        const contentPage = await ContentPage_1.default.findByOrFail('page_name', ContentPage_1.default.pageName[1]);
        let pastEvents = await Blog_1.default.query().where('show_at_page', 'events')
            .preload('blogCategory')
            .where('show_until', '<', new Date())
            .paginate(request.input('page', 1), 6);
        return view.render('event/past', {
            ourContact, aboutUs, titlePage, contentPage, pastEvents
        });
    }
    async getPast({ request }) {
        let pastEvents = await Blog_1.default.query().where('show_at_page', 'events')
            .preload('blogCategory')
            .where('show_until', '<', new Date())
            .paginate(request.input('page', 1), 6);
        return pastEvents;
    }
    async getUpcoming({ request }) {
        const upcomingEvents = await Blog_1.default.query().where('show_at_page', 'events')
            .preload('blogCategory')
            .where('show_until', '>=', Helper_1.default.getCurrentDatetime())
            .orderBy('created_at', 'desc')
            .paginate(request.input('page', 1), 6);
        return upcomingEvents;
    }
    async upcoming({ view, request }) {
        const aboutUs = await AboutUs_1.default.first();
        const ourContact = await OurContact_1.default.all();
        const contentPage = await ContentPage_1.default.findByOrFail('page_name', ContentPage_1.default.pageName[2]);
        const upcomingEvents = await Blog_1.default.query().where('show_at_page', 'events')
            .preload('blogCategory')
            .where('show_until', '>=', Helper_1.default.getCurrentDatetime())
            .orderBy('created_at', 'desc')
            .paginate(request.input('page', 1), 6);
        return view.render('event/upcoming', {
            aboutUs, upcomingEvents, ourContact, contentPage
        });
    }
}
exports.default = EventController;
//# sourceMappingURL=EventController.js.map