import Factory from "@ioc:Adonis/Lucid/Factory"
import LogoMeaning from "App/Models/LogoMeaning"

export const LogoMeaningFactories = Factory.define(LogoMeaning, ({ faker }) => {
    return {
        img: faker.image.nature(),
        desc: faker.lorem.paragraphs(3)
    }
}).build()