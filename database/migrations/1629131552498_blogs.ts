import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Blogs extends BaseSchema {
    protected tableName = 'blogs'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.string('title', 100).notNullable()
            table.string('slug').notNullable().unique()
            table.string('cover').notNullable()
            table.text('content').notNullable()
            table.integer('blog_category_id').notNullable()
            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
