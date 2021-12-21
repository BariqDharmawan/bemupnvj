"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const faculty_and_major_factories_1 = global[Symbol.for('ioc.use')]("Database/factories/faculty_and_major_factories");
class FacultyAndMajorSeeder extends Seeder_1.default {
    async run() {
        await faculty_and_major_factories_1.FacultyFactories.with('majors', 3).createMany(5);
    }
}
exports.default = FacultyAndMajorSeeder;
//# sourceMappingURL=FacultyAndMajorSeeder.js.map