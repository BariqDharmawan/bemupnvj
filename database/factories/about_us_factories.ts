import Factory from "@ioc:Adonis/Lucid/Factory"
import Helper from "App/Helper"
import AboutUs from "App/Models/AboutUs"

export const AboutUsFactories = Factory.define(AboutUs, ({ faker }) => {
    const ytId = Helper.getStringAfter(
        'https://www.youtube.com/watch?v=UlLrBWvxOkM',
        'https://www.youtube.com/watch?v='
    )
    return {
        cabinet_name: 'Mardhika',
        cabinet_meaning: faker.lorem.paragraphs(6),
        our_vision: faker.lorem.paragraph(),
        vision_cover: faker.image.nature(),
        logo: faker.image.avatar(),
        know_us_video: ytId
    }
}).build()