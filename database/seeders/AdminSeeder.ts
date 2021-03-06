import Hash from '@ioc:Adonis/Core/Hash'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class AdminSeederSeeder extends BaseSeeder {
    public async run() {
        await User.createMany([
            {
                email: 'superadminbem@upnvj.ac.id',
                password: 'superadminbemupnvj'
            }
        ])
    }
}
