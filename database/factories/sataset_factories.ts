import Factory from "@ioc:Adonis/Lucid/Factory"
import OurSocial from "App/Models/OurSocial"
import Sataset from "App/Models/Sataset"

export const SatasetFactories = Factory.define(Sataset, ({ faker }) => {
    return {
        file: 'uploads/file/sample.pdf',
        title: faker.lorem.sentence(1),
        short_desc: faker.lorem.sentence(2),
        is_display: faker.datatype.boolean()
    }
}).build()
