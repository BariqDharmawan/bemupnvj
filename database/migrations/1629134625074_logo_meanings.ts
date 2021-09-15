import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class LogoMeanings extends BaseSchema {
    protected tableName = 'logo_meanings'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.string('img').notNullable()
            table.string('title').notNullable()
            table.text('desc').notNullable()
            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
