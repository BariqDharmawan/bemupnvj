import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Majors extends BaseSchema {
    protected tableName = 'majors'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.string('name')
            table.integer('faculty_id')
            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
