import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { SatasetFactories } from 'Database/factories/sataset_factories'

export default class SatasetSeederSeeder extends BaseSeeder {
    public async run() {
        await SatasetFactories.createMany(4)
    }
}
