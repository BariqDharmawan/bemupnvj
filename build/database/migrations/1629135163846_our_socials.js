"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class OurSocials extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'our_socials';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table.string('logo');
            table.string('name').unique();
            table.string('username');
            table.string('color');
            table.string('url').notNullable().unique();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = OurSocials;
//# sourceMappingURL=1629135163846_our_socials.js.map