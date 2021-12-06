import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Satasets extends BaseSchema {
    protected tableName = 'satasets'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.string('file').notNullable()
            table.string('title', 40).notNullable()
            table.string('short_desc').notNullable()
            table.boolean('is_display').defaultTo(false)
            /**
             * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
             */
            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
