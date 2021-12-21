"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const ContentPage_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ContentPage"));
class ContentPageSeeder extends Seeder_1.default {
    async run() {
        const descPage = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.

        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.

        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.
        `;
        await ContentPage_1.default.createMany([
            {
                logo: '/assets/img/content/dummy/info-mahasiswa-dummy-logo.svg',
                page_name: ContentPage_1.default.pageName[0],
                desc_page: '',
            },
            {
                logo: '/assets/img/content/dummy/info-mahasiswa-dummy-logo.svg',
                page_name: ContentPage_1.default.pageName[1],
                desc_page: '',
            },
            {
                logo: '/assets/img/content/dummy/info-mahasiswa-dummy-logo.svg',
                page_name: ContentPage_1.default.pageName[2],
                desc_page: '',
            },
            {
                logo: '/assets/img/content/dummy/info-mahasiswa-dummy-logo.svg',
                page_name: ContentPage_1.default.pageName[3],
                desc_page: descPage
            },
            {
                logo: '/assets/img/content/dummy/info-mahasiswa-dummy-logo.svg',
                page_name: ContentPage_1.default.pageName[4],
                desc_page: descPage
            },
            {
                logo: '/assets/img/content/dummy/info-mahasiswa-dummy-logo.svg',
                page_name: ContentPage_1.default.pageName[5],
                desc_page: descPage
            },
            {
                logo: '/assets/img/content/dummy/info-mahasiswa-dummy-logo.svg',
                page_name: ContentPage_1.default.pageName[6],
                desc_page: descPage
            },
        ]);
    }
}
exports.default = ContentPageSeeder;
//# sourceMappingURL=ContentPageSeeder.js.map