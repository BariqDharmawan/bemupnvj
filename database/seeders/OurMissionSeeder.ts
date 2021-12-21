import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { OurMissionFactories } from 'Database/factories/our_mission_factories'

export default class OurMissionSeeder extends BaseSeeder {
    public async run() {
        await OurMissionFactories.createMany(3)
    }
}
