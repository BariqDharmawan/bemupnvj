"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Satasets extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'satasets';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table.string('file').nullable();
            table.string('title', 40).notNullable();
            table.text('short_desc').notNullable();
            table.boolean('is_display').defaultTo(false);
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Satasets;
//# sourceMappingURL=1632041660281_satasets.js.map