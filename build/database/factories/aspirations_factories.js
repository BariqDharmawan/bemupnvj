"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AspirationCategoriesFactories = exports.AspirationsFactories = void 0;
const Factory_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Factory"));
const Aspiration_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Aspiration"));
const AspirationCategory_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/AspirationCategory"));
exports.AspirationsFactories = Factory_1.default.define(Aspiration_1.default, ({ faker }) => {
    return {
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        email: faker.internet.email(),
        message: faker.lorem.paragraphs(3)
    };
}).build();
exports.AspirationCategoriesFactories = Factory_1.default
    .define(AspirationCategory_1.default, ({ faker }) => {
    return {
        category: faker.lorem.words(2)
    };
})
    .relation('aspirations', () => exports.AspirationsFactories)
    .build();
//# sourceMappingURL=aspirations_factories.js.map