import Factory from "@ioc:Adonis/Lucid/Factory"
import Helper from "App/Helper"
import AboutUs from "App/Models/AboutUs"

export const AboutUsFactories = Factory.define(AboutUs, ({ faker }) => {
    const ytId = Helper.getStringAfter(
        'https://www.youtube.com/watch?v=UlLrBWvxOkM',
        'https://www.youtube.com/watch?v='
    )
    return {
        cabinet_name: faker.lorem.words(3),
        desc: faker.lorem.paragraphs(5),
        cabinet_meaning: faker.lorem.paragraphs(2),
        our_vision: faker.lorem.paragraph(),
        vision_cover: faker.image.nature(),
        logo: faker.image.avatar(),
        know_us_video: ytId
    }
}).build()