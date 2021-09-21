import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { BlogCategoriesFactories } from 'Database/factories/blogs_factories'

export default class BlogSeeder extends BaseSeeder {
    public static developmentOnly = true

    public async run() {
        await BlogCategoriesFactories.with('blogs', 3).createMany(3)

        await BlogCategoriesFactories.with(
            'blogs', 3, (blog) => blog.apply('isEventPast')
        ).createMany(9)

        await BlogCategoriesFactories.with(
            'blogs', 3, (blog) => blog.apply('isEventUpcoming')
        )
        .createMany(9)
    }
}
