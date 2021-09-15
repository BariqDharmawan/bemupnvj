import Factory from "@ioc:Adonis/Lucid/Factory"
import LogoMeaning from "App/Models/LogoMeaning"

export const LogoMeaningFactories = Factory.define(LogoMeaning, ({ faker }) => {
    return {
        img: faker.image.nature(),
        title: faker.lorem.sentence(3),
        desc: faker.lorem.paragraphs(1)
    }
}).build()