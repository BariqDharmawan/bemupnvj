"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const logo_meaning_factories_1 = global[Symbol.for('ioc.use')]("Database/factories/logo_meaning_factories");
class LogoMeaningSeeder extends Seeder_1.default {
    async run() {
        await logo_meaning_factories_1.LogoMeaningFactories.createMany(4);
    }
}
exports.default = LogoMeaningSeeder;
//# sourceMappingURL=LogoMeaningSeeder.js.map