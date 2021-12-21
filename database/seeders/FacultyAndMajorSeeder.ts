import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { FacultyFactories } from 'Database/factories/faculty_and_major_factories'

export default class FacultyAndMajorSeeder extends BaseSeeder {
    public async run() {
        await FacultyFactories.with('majors', 3).createMany(5)
    }
}
