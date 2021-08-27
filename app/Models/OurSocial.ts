import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class OurSocial extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public logo: string
    
    @column()
    public name: string

    @column()
    public username: string
    
    @column()
    public color: string

    @column()
    public url: string

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime

    public static generateUrl(platform: string, username: string) {
        let link: string = ''

        switch (platform) {
            case 'instagram':
                link = `https://www.instagram.com/${username}`
            break;

            case 'youtube':
                link = `https://www.youtube.com/c/${username}`
            break;

            case 'facebook':
                link = `https://www.facebook.com/${username}`
            break;

            case 'twitter':
                link = `https://twitter.com/${username}`
            break;

            case 'whatsapp':
                if (username.startsWith('0')) {
                    username = username.replace(username.charAt(0), "62")
                }
                else if (username.startsWith('62')) {
                    username = username
                }
                else { //if first letter not contain 0 or 62
                    username = `62${username}`
                }
                        
                link = `https://wa.me/${username}`
            break;

            case 'telegram':
                link = `https://telegram.me/${username}`
            break;
        }

        return link
    }
}
