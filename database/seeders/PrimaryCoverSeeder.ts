import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import HomeCover from 'App/Models/HomeCover'

export default class PrimaryCoverSeeder extends BaseSeeder {
    public async run() {
        await HomeCover.create({
            filename: '/assets/img/content/tentang-kami.png'
        })
    }
}
