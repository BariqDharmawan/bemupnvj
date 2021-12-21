"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OurMissionFactories = void 0;
const Factory_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Factory"));
const OurMission_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/OurMission"));
exports.OurMissionFactories = Factory_1.default.define(OurMission_1.default, ({ faker }) => {
    return {
        content: faker.lorem.sentences(3),
        order_number: faker.unique(() => faker.datatype.number({ min: 1, max: 3 })),
    };
}).build();
//# sourceMappingURL=our_mission_factories.js.map