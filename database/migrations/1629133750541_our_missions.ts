import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OurMissions extends BaseSchema {
    protected tableName = 'our_missions'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.text('content').notNullable()
            table.integer('order_number').notNullable().unique()
            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
