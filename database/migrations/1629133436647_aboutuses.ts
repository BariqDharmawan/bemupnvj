import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Aboutuses extends BaseSchema {
    protected tableName = 'aboutuses'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.string('cabinet_name')
            table.text('desc').notNullable()
            table.text('cabinet_meaning').notNullable()
            table.text('our_vision').notNullable()
            table.text('vision_cover').notNullable()
            table.string('logo').notNullable()
            table.string('know_us_video').notNullable()
            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
