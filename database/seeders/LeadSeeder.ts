import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { LeadFactories } from 'Database/factories/lead_factories'

export default class LeadSeeder extends BaseSeeder {
    public async run() {
        await LeadFactories.createMany(4)
    }
}
