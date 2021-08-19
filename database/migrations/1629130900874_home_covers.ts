import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class HomeCovers extends BaseSchema {
    protected tableName = 'home_cover'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.string('filename').notNullable()
            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
