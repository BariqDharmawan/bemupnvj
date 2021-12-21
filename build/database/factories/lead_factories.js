"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadFactories = void 0;
const Factory_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Factory"));
const Lead_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Lead"));
exports.LeadFactories = Factory_1.default.define(Lead_1.default, ({ faker }) => {
    return {
        email: faker.internet.email(),
        subject: faker.lorem.words(3),
        desc: faker.lorem.paragraphs(2),
    };
}).build();
//# sourceMappingURL=lead_factories.js.map