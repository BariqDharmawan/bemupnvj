"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const aspirations_factories_1 = global[Symbol.for('ioc.use')]("Database/factories/aspirations_factories");
class AspirationSeeder extends Seeder_1.default {
    async run() {
        await aspirations_factories_1.AspirationCategoriesFactories.with('aspirations', 3).createMany(4);
    }
}
exports.default = AspirationSeeder;
//# sourceMappingURL=AspirationSeeder.js.map