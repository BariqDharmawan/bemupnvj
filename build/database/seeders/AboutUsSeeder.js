"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const about_us_factories_1 = global[Symbol.for('ioc.use')]("Database/factories/about_us_factories");
class AboutUsSeeder extends Seeder_1.default {
    async run() {
        await about_us_factories_1.AboutUsFactories.create();
    }
}
exports.default = AboutUsSeeder;
//# sourceMappingURL=AboutUsSeeder.js.map