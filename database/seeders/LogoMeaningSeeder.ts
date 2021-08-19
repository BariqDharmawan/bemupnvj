import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { LogoMeaningFactories } from 'Database/factories/logo_meaning_factories'

export default class LogoMeaningSeeder extends BaseSeeder {
    public async run() {
        await LogoMeaningFactories.createMany(4)
    }
}
