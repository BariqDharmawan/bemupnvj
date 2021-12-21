"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogCategoriesFactories = exports.BlogsFactories = void 0;
const Factory_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Factory"));
const Blog_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Blog"));
const BlogCategory_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/BlogCategory"));
const luxon_1 = require("luxon");
const randomNumber = Math.floor(Math.random() * 10);
exports.BlogsFactories = Factory_1.default.define(Blog_1.default, ({ faker }) => {
    return {
        title: faker.lorem.sentence(),
        slug: faker.lorem.slug(),
        cover: faker.image.abstract(),
        show_at_page: faker.random.arrayElement([
            'home', 'info-mahasiswa', 'portal-berita', 'events'
        ]),
        content: '<p>' + faker.lorem.paragraph() + '</p>'
    };
})
    .state('isEventPast', (blog) => {
    blog.show_at_page = 'events';
    blog.show_until = luxon_1.DateTime.local().minus({ days: randomNumber });
})
    .state('isEventUpcoming', (eventUpcoming) => {
    eventUpcoming.show_at_page = 'events';
    eventUpcoming.show_until = luxon_1.DateTime.local().plus({ days: randomNumber });
})
    .state('isNews', (news) => {
    news.show_at_page = 'portal-berita';
})
    .state('isInfoForStudent', (infoForStudent) => {
    infoForStudent.show_at_page = 'info-mahasiswa';
})
    .state('isLatestNews', (latestNews) => {
    latestNews.show_at_page = 'home';
})
    .build();
exports.BlogCategoriesFactories = Factory_1.default.define(BlogCategory_1.default, ({ faker }) => {
    return {
        category: faker.lorem.sentence()
    };
})
    .relation('blogs', () => exports.BlogsFactories)
    .build();
//# sourceMappingURL=blogs_factories.js.map