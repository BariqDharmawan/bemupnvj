"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacultyFactories = exports.MajorFactories = void 0;
const Factory_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Factory"));
const Faculty_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Faculty"));
const Major_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Major"));
exports.MajorFactories = Factory_1.default.define(Major_1.default, ({ faker }) => {
    return {
        name: faker.lorem.words(2)
    };
}).build();
exports.FacultyFactories = Factory_1.default.define(Faculty_1.default, ({ faker }) => {
    return {
        name: faker.lorem.words(3)
    };
})
    .relation('majors', () => exports.MajorFactories)
    .build();
//# sourceMappingURL=faculty_and_major_factories.js.map