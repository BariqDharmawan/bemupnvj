import Factory from "@ioc:Adonis/Lucid/Factory"
import OurSocial from "App/Models/OurSocial"

export const OurSocialFactories = Factory.define(OurSocial, ({ faker }) => {
    const username = faker.internet.userName()
    const platforms = ['instagram', 'youtube', 'facebook', 'twitter', 'whatsapp', 'telegram']
    return {
        logo: faker.image.cats(),
        name: faker.unique(() => platforms[Math.floor(Math.random() * platforms.length)]),
        username: username,
        color: faker.internet.color(),
        url: faker.internet.url()
    }
}).build()