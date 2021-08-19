import Factory from "@ioc:Adonis/Lucid/Factory"
import AboutUs from "App/Models/AboutUs"

export const AboutUsFactories = Factory.define(AboutUs, ({ faker }) => {
    return {
        cabinet_name: faker.lorem.words(3),
        desc: faker.lorem.paragraphs(5),
        cabinet_meaning: faker.lorem.paragraphs(2),
        our_vision: faker.lorem.paragraph(),
        vision_cover: faker.image.nature(),
        logo: faker.image.avatar(),
        know_us_video: 'https://www.youtube.com/watch?v=UlLrBWvxOkM'
    }
}).build()