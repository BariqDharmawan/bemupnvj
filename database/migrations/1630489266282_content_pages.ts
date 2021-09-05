import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ContentPages extends BaseSchema {
    protected tableName = 'content_pages'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id')
            table.string('desc_page')
            table.enum('page_name', ['contact', 'about-us'])

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