"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SatasetFactories = void 0;
const Factory_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Factory"));
const Sataset_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Sataset"));
exports.SatasetFactories = Factory_1.default.define(Sataset_1.default, ({ faker }) => {
    return {
        file: '/uploads/file/sample.pdf',
        title: faker.lorem.sentence(1),
        short_desc: faker.lorem.sentence(100),
        is_display: faker.datatype.boolean()
    };
}).build();
//# sourceMappingURL=sataset_factories.js.map