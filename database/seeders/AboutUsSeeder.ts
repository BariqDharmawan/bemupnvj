import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { AboutUsFactories } from 'Database/factories/about_us_factories'

export default class AboutUsSeeder extends BaseSeeder {
    public async run() {
        await AboutUsFactories.create()
    }
}
