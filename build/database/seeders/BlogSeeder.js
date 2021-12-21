"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const blogs_factories_1 = global[Symbol.for('ioc.use')]("Database/factories/blogs_factories");
class BlogSeeder extends Seeder_1.default {
    async run() {
        await blogs_factories_1.BlogCategoriesFactories.with('blogs', 1, (blog) => blog.apply('isLatestNews')).createMany(3);
        await blogs_factories_1.BlogCategoriesFactories.with('blogs', 2, (blog) => blog.apply('isInfoForStudent')).createMany(3);
        await blogs_factories_1.BlogCategoriesFactories.with('blogs', 2, (blog) => blog.apply('isNews')).createMany(3);
        await blogs_factories_1.BlogCategoriesFactories.with('blogs', 3, (blog) => blog.apply('isEventPast')).createMany(9);
        await blogs_factories_1.BlogCategoriesFactories.with('blogs', 3, (blog) => blog.apply('isEventUpcoming'))
            .createMany(9);
    }
}
exports.default = BlogSeeder;
//# sourceMappingURL=BlogSeeder.js.map