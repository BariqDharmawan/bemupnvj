import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Aspirations extends BaseSchema {
    protected tableName = 'aspirations'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.string('name')
            table.string('email')
            table.text('message')
            table.integer('aspiration_category_id')
            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
