import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class AboutUs extends BaseModel {
    public static table = 'about_us'

    @column({ isPrimary: true })
    public id: number

    @column()
    public cabinet_name: string

    @column()
    public desc: string

    @column()
    public cabinet_meaning: string

    @column()
    public our_vision: string

    @column()
    public vision_cover: string

    @column()
    public logo: string

    @column()
    public know_us_video: string

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
}
