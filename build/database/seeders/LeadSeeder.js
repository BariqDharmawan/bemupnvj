"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const lead_factories_1 = global[Symbol.for('ioc.use')]("Database/factories/lead_factories");
class LeadSeeder extends Seeder_1.default {
    async run() {
        await lead_factories_1.LeadFactories.createMany(4);
    }
}
exports.default = LeadSeeder;
//# sourceMappingURL=LeadSeeder.js.map