import Factory from "@ioc:Adonis/Lucid/Factory"
import OurMission from "App/Models/OurMission"

export const OurMissionFactories = Factory.define(OurMission, ({ faker }) => {
    return {
        content: faker.lorem.sentences(3),
        order_number: faker.unique(() => faker.datatype.number(3)),
    }
}).build()