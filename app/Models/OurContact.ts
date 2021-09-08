import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class OurContact extends BaseModel {
    public static table = 'our_contact'

    @column({ isPrimary: true })
    public id: number

    @column()
    public logo: string
    
    @column()
    public info: string

    @column()
    public link: string

    @column()
    public additional_info: string

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime

    public static generateLink(info: string) {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
        let url = ''

        if (Number(info)) {
            url = `tel:${info}`
        }
        else if(info.match(validRegex)) {
            url = `mailto:${info}`
        }

        return url
    }
}
