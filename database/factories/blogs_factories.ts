import Factory from "@ioc:Adonis/Lucid/Factory"
import Blog from "App/Models/Blog"
import BlogCategory from "App/Models/BlogCategory"

export const BlogsFactories = Factory.define(Blog, ({ faker }) => {
    return {
        title: faker.lorem.sentence(),
        slug: faker.lorem.slug(),
        cover: faker.image.abstract(),
        content: faker.lorem.paragraph()
    }
}).build()

export const BlogCategoriesFactories = Factory.define(BlogCategory, ({ faker }) => {
    return {
        category: faker.lorem.sentence()
    }
})
.relation('blogs', () => BlogsFactories)
.build()