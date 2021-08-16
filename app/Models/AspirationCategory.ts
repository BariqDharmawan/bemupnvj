import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Aspiration from './Aspiration'

export default class AspirationCategory extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public category: string

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime

    @hasMany(() => Aspiration, {
        foreignKey: 'aspiration_category_id'
    })
    public majors: HasMany<typeof Aspiration>
}
