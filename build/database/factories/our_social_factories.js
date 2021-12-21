"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OurSocialFactories = void 0;
const Factory_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Factory"));
const OurSocial_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/OurSocial"));
exports.OurSocialFactories = Factory_1.default.define(OurSocial_1.default, ({ faker }) => {
    const username = faker.internet.userName();
    const platforms = ['instagram', 'youtube', 'facebook', 'twitter', 'whatsapp', 'telegram'];
    return {
        logo: faker.image.cats(),
        name: faker.unique(function () {
            return faker.random.arrayElement(platforms);
        }),
        username: username,
        color: faker.internet.color(),
        url: faker.internet.url()
    };
}).build();
//# sourceMappingURL=our_social_factories.js.map