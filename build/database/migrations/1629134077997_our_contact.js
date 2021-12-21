"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class OurContact extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'our_contact';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table.string('logo').notNullable();
            table.string('info').notNullable();
            table.string('link').notNullable();
            table.text('additional_info').nullable();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = OurContact;
//# sourceMappingURL=1629134077997_our_contact.js.map