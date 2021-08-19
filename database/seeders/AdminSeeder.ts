import Hash from '@ioc:Adonis/Core/Hash'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class AdminSeederSeeder extends BaseSeeder {
    public async run() {
        await User.createMany([
            {
                email: 'superadminbem@upnvj.ac.id',
                role: 'superadmin',
                password: await Hash.make('superadminbemupnvj')
            },
            {
                email: 'adminbem1@upnvj.ac.id',
                role: 'admin',
                password: await Hash.make('adminbemupnvj')
            },
            {
                email: 'adminbem2@upnvj.ac.id',
                role: 'admin',
                password: await Hash.make('adminbemupnvj')
            },
        ])
    }
}
