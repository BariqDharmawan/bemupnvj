import Factory from "@ioc:Adonis/Lucid/Factory"
import Lead from "App/Models/Lead"

export const LeadFactories = Factory.define(Lead, ({ faker }) => {
    return {
        email: faker.internet.email(),
        subject: faker.lorem.words(3),
        desc: faker.lorem.paragraphs(2),
    }
}).build()