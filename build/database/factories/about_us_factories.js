"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutUsFactories = void 0;
const Factory_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Factory"));
const Helper_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Helper"));
const AboutUs_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/AboutUs"));
exports.AboutUsFactories = Factory_1.default.define(AboutUs_1.default, ({ faker }) => {
    const ytId = Helper_1.default.getStringAfter('https://www.youtube.com/watch?v=UlLrBWvxOkM', 'https://www.youtube.com/watch?v=');
    return {
        cabinet_name: 'Mardhika',
        cabinet_meaning: faker.lorem.paragraphs(6),
        our_vision: faker.lorem.paragraph(),
        vision_cover: faker.image.nature(),
        logo: faker.image.avatar(),
        know_us_video: ytId
    };
}).build();
//# sourceMappingURL=about_us_factories.js.map