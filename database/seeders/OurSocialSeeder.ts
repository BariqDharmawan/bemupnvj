import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { OurSocialFactories } from 'Database/factories/our_social_factories'

export default class OurSocialSeederSeeder extends BaseSeeder {
    public async run() {
        await OurSocialFactories.createMany(6)
    }
}
