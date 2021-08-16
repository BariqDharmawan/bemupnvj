import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class BlogCategories extends BaseSchema {
    protected tableName = 'blog_categories'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.string('category').notNullable().unique()
            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
