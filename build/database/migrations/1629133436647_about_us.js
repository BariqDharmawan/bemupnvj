"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class AboutUs extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'about_us';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table.string('cabinet_name');
            table.text('cabinet_meaning').notNullable();
            table.text('our_vision').notNullable();
            table.text('vision_cover').notNullable();
            table.string('logo').notNullable();
            table.string('know_us_video').notNullable();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = AboutUs;
//# sourceMappingURL=1629133436647_about_us.js.map