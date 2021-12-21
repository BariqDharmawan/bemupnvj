"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const sataset_factories_1 = global[Symbol.for('ioc.use')]("Database/factories/sataset_factories");
class SatasetSeederSeeder extends Seeder_1.default {
    async run() {
        await sataset_factories_1.SatasetFactories.createMany(4);
    }
}
exports.default = SatasetSeederSeeder;
//# sourceMappingURL=SatasetSeeder.js.map