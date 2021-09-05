import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { slugify } from '@ioc:Adonis/Addons/LucidSlugify'
import BlogCategory from './BlogCategory'

export default class Blog extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public title: string

    @column()
    public slug: string

    @column()
    public cover: string

    @column()
    public content: string

    @column()
    public blog_category_id: number

    @column.dateTime({ autoCreate: true })
    public created_at: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updated_at: DateTime

    @belongsTo(() => BlogCategory)
    public blogCategory: BelongsTo<typeof BlogCategory>

    public static pathCover = '/uploads/article'
}
