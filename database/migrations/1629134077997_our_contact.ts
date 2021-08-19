import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OurContact extends BaseSchema {
    protected tableName = 'our_contact'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.string('email').notNullable()
            table.string('telephone').notNullable()
            table.text('address').notNullable()
            table.text('desc_contact_page').notNullable()
            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
