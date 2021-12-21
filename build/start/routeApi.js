"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('primary-cover', 'HomeCoversController.getCover').as('primary_cover.getCover');
    Route_1.default.get('mission', 'OurMissionsController.getMission').as('mission.getMission');
    Route_1.default.get('article/:id', 'BlogsController.getSingleArticle').as('mission.getArticle');
    Route_1.default.get('news-portal', 'NewsController.getNews').as('news_portal');
    Route_1.default.get('info-mahasiswa', 'StudentInfoController.getInfoBeasiswa').as('student_info');
    Route_1.default.group(() => {
        Route_1.default.get('past', 'EventController.getPast').as('past');
        Route_1.default.get('upcoming', 'EventController.getUpcoming').as('upcoming');
    }).as('event').prefix('event');
}).as('api').prefix('api');
//# sourceMappingURL=routeApi.js.map