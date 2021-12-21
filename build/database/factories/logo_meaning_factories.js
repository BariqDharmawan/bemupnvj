"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoMeaningFactories = void 0;
const Factory_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Factory"));
const LogoMeaning_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/LogoMeaning"));
exports.LogoMeaningFactories = Factory_1.default.define(LogoMeaning_1.default, ({ faker }) => {
    return {
        img: faker.image.nature(),
        title: faker.lorem.sentence(3),
        desc: faker.lorem.paragraphs(1)
    };
}).build();
//# sourceMappingURL=logo_meaning_factories.js.map