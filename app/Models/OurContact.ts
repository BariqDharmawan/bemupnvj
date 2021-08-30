import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class OurContact extends BaseModel {
    public static table = 'our_contact'

    @column({ isPrimary: true })
    public id: number

    @column()
    public embed_map: string
    
    @column()
    public address: string

    @column()
    public email: string

    @column()
    public telephone: string

    @column()
    public desc_contact_page: string

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
}
