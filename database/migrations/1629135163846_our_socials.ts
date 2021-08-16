import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OurSocials extends BaseSchema {
    protected tableName = 'our_socials'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.string('logo')
            table.string('name').unique()
            table.string('username')
            table.string('color')
            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
