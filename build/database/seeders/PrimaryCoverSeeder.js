"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const HomeCover_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/HomeCover"));
class PrimaryCoverSeeder extends Seeder_1.default {
    async run() {
        await HomeCover_1.default.create({
            filename: '/assets/img/content/tentang-kami.png'
        });
    }
}
exports.default = PrimaryCoverSeeder;
//# sourceMappingURL=PrimaryCoverSeeder.js.map