import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { AspirationCategoriesFactories } from 'Database/factories/aspirations_factories'

export default class AspirationSeeder extends BaseSeeder {
    public static developmentOnly = true

    public async run() {
        await AspirationCategoriesFactories.with('aspirations', 3).createMany(4)
    }
}
