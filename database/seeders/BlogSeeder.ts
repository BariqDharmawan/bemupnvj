import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { BlogCategoriesFactories } from 'Database/factories/blogs_factories'

export default class BlogSeeder extends BaseSeeder {
    public async run() {
        await BlogCategoriesFactories.with(
            'blogs', 1, (blog) => blog.apply('isLatestNews')
        ).createMany(3)

        await BlogCategoriesFactories.with(
            'blogs', 2, (blog) => blog.apply('isInfoForStudent')
        ).createMany(3)

        await BlogCategoriesFactories.with(
            'blogs', 2, (blog) => blog.apply('isNews')
        ).createMany(3)

        await BlogCategoriesFactories.with(
            'blogs', 3, (blog) => blog.apply('isEventPast')
        ).createMany(9)

        await BlogCategoriesFactories.with(
            'blogs', 3, (blog) => blog.apply('isEventUpcoming')
        )
        .createMany(9)
    }
}
