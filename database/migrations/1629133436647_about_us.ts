import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AboutUs extends BaseSchema {
    protected tableName = 'about_us'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.string('cabinet_name')
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
