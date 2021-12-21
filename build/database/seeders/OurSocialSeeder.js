"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const our_social_factories_1 = global[Symbol.for('ioc.use')]("Database/factories/our_social_factories");
class OurSocialSeederSeeder extends Seeder_1.default {
    async run() {
        await our_social_factories_1.OurSocialFactories.createMany(6);
    }
}
exports.default = OurSocialSeederSeeder;
//# sourceMappingURL=OurSocialSeeder.js.map