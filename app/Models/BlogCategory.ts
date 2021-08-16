import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Blog from './Blog'

export default class BlogCategory extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public category: string

    @hasMany(() => Blog, {
        foreignKey: 'blog_category_id'
    })
    public blogs: HasMany<typeof Blog>

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
}
