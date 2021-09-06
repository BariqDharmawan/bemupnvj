import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { BlogCategoriesFactories } from 'Database/factories/blogs_factories'

export default class BlogSeeder extends BaseSeeder {
    public static developmentOnly = true

    public async run() {
        await BlogCategoriesFactories.with('blogs', 3).createMany(3)
    }
}
