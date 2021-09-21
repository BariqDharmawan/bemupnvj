import Factory from "@ioc:Adonis/Lucid/Factory"
import Blog from "App/Models/Blog"
import BlogCategory from "App/Models/BlogCategory"
import { DateTime } from 'luxon'

const randomNumber = Math.floor(Math.random() * 10)

export const BlogsFactories = Factory.define(Blog, ({ faker }) => {
    return {
        title: faker.lorem.sentence(),
        slug: faker.lorem.slug(),
        cover: faker.image.abstract(),
        show_at_page: faker.random.arrayElement([
                'home', 'info-mahasiswa', 'portal-berita', 'events'
        ]),
        content: '<p>' + faker.lorem.paragraph() + '</p>'
    }
})
.state(
    'isEventPast', (blog) => {
        blog.show_at_page = 'events'
        blog.show_until = DateTime.local().minus({days: randomNumber})
    }
)
.state(
    'isEventUpcoming', (eventUpcoming) => {
        eventUpcoming.show_at_page = 'events'
        eventUpcoming.show_until = DateTime.local().plus({days: randomNumber})
    }
)
.state('isNews', (news) => {
    news.show_at_page = 'portal-berita'
})
.state('isInfoForStudent', (infoForStudent) => {
    infoForStudent.show_at_page = 'info-mahasiswa'
})
.state('isLatestNews', (latestNews) => {
    latestNews.show_at_page = 'home'
})
.build()

export const BlogCategoriesFactories = Factory.define(BlogCategory, ({ faker }) => {
    return {
        category: faker.lorem.sentence()
    }
})
.relation('blogs', () => BlogsFactories)
.build()