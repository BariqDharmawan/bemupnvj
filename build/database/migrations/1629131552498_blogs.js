"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Blogs extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'blogs';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table.string('title', 100).notNullable();
            table.string('slug').notNullable().unique();
            table.string('cover').notNullable();
            table.text('content').notNullable();
            table.enum('show_at_page', ['home', 'info-mahasiswa', 'portal-berita', 'events']);
            table.timestamp('show_until', { useTz: true }).nullable();
            table.integer('blog_category_id').notNullable();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Blogs;
//# sourceMappingURL=1629131552498_blogs.js.map