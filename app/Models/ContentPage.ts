import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ContentPage extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public logo: string

    @column()
    public desc_page: string

    @column()
    public page_name: string

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime

    public static pageName = [
        'info-mahasiswa',
        'past-events',
        'upcoming-events',
        'contact-us',
        'about-us'
    ]
}
