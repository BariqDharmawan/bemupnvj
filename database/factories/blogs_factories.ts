import Factory from "@ioc:Adonis/Lucid/Factory"
import Blog from "App/Models/Blog"
import BlogCategory from "App/Models/BlogCategory"

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
}).build()

export const BlogCategoriesFactories = Factory.define(BlogCategory, ({ faker }) => {
    return {
        category: faker.lorem.sentence()
    }
})
.relation('blogs', () => BlogsFactories)
.build()