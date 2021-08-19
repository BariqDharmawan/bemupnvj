import Factory from "@ioc:Adonis/Lucid/Factory"
import OurSocial from "App/Models/OurSocial"

export const OurSocialFactories = Factory.define(OurSocial, ({ faker }) => {
    return {
        logo: faker.image.cats(),
        name: faker.lorem.sentences(2),
        username: faker.lorem.sentence(),
        color: faker.internet.color(),
    }
}).build()