"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
require("./routeAuth");
require("./routeApi");
Route_1.default.get('/', 'HomeController.index').as('landing_page');
Route_1.default.post('mission/update-all-list', 'OurMissionsController.updateAllList')
    .as('mission.update_all-list');
Route_1.default.group(() => {
    Route_1.default.resource('mission', 'OurMissionsController').apiOnly();
    Route_1.default.resource('our-social', 'OurSocialsController').only(['store', 'update', 'destroy']);
    Route_1.default.group(() => {
        Route_1.default.get('vision-mission', 'AboutUsController.manageVisionMission')
            .as('vision_mission');
        Route_1.default.get('content', 'AboutUsController.content').as('content');
        Route_1.default.get('profile', 'AboutUsController.profile').as('profile');
    }).prefix('about-us').as('about_us');
    Route_1.default.get('our-contact/manage', 'OurContactController.manage').as('our_contact.manage');
    Route_1.default.resource('our-contact', 'OurContactController').only([
        'store', 'destroy', 'update'
    ]);
    Route_1.default.get('aspirations/manage', 'AspirationsController.manage').as('aspirations.manage');
    Route_1.default.group(function () {
        Route_1.default.get('manage', 'BlogsController.manage').as('manage');
    }).prefix('blog').as('blog');
    Route_1.default.group(() => {
        Route_1.default.get('content', 'ContactUsController.content').as('content');
        Route_1.default.get('manage', 'ContactUsController.manage').as('manage');
    }).prefix('contact-us').as('contact_us');
    Route_1.default.group(() => {
        Route_1.default.resource('primary-cover', 'HomeCoversController').only([
            'index', 'store', 'destroy'
        ]);
        Route_1.default.put('content-page/:page_name', 'ContentPagesController.update').as('content_page.update');
        Route_1.default.resource('blog-category', 'BlogCategoriesController').only([
            'store', 'update', 'destroy'
        ]);
    }).as('admin');
    Route_1.default.resource('aspiration-category', 'AspirationCategoriesController').only([
        'store', 'update'
    ]);
    Route_1.default.resource('content-page', 'ContentPagesController');
}).middleware(['auth']);
Route_1.default.resource('blog', 'BlogsController').only([
    'show', 'store', 'update', 'destroy'
]).middleware({
    'store': ['auth'],
    'update': ['auth'],
    'destroy': ['auth'],
});
Route_1.default.get('satasets/manage', 'SatasetController.manage').as('satasets.manage');
Route_1.default.resource('satasets', 'SatasetController');
Route_1.default.resource('about-us', 'AboutUsController').except(['create', 'edit', 'update', 'show']);
Route_1.default.resource('contact-us', 'ContactUsController');
Route_1.default.put('about-us/update', 'AboutUsController.update').as('about_us.update');
Route_1.default.get('visi-misi', 'AboutUsController.visionMission').as('vision_mission');
Route_1.default.resource('makna-logo', 'LogoMeaningsController').as('logo_meaning').except(['show']);
Route_1.default.get('makna-logo/manage', 'LogoMeaningsController.manage').as('logo_meaning.manage');
Route_1.default.group(() => {
    Route_1.default.get('/', 'StudentInfoController.index').as('index');
    Route_1.default.get('scholarship-and-career', 'StudentInfoController.scholareer').as('scholareer');
}).as('info_mahasiswa').prefix('info-mahasiswa');
Route_1.default.group(() => {
    Route_1.default.get('past', 'EventController.past').as('past_events.index');
    Route_1.default.get('upcoming', 'EventController.upcoming').as('upcoming_events.index');
}).prefix('event');
Route_1.default.get('news-portal', 'NewsController.portal').as('portal_news.index');
Route_1.default.resource('aspirations', 'AspirationsController').only([
    'index', 'store', 'destroy'
]).middleware({ 'destroy': ['auth'] });
//# sourceMappingURL=routes.js.map