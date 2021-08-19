import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import OurContact from 'App/Models/OurContact'

export default class OurContactSeeder extends BaseSeeder {
    public async run() {
        await OurContact.create({
            address: 'Jl. RS. Fatmawati Raya, Pd. Labu, Kec. Cilandak, Kota Depok',
            email: 'upnvj@upnvj.ac.id',
            telephone: '0217656971',
            desc_contact_page: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan lacinia fringilla. Curabitur vel mollis eros, sit amet auctor elit. Nunc nisl tellus, molestie nec nibh at, rutrum imperdiet purus. Aliquam vitae diam quis nisl ullamcorper viverra quis eget tellus. In venenatis eros in congue tincidunt. Aenean semper accumsan dui ut tempor. Integer hendrerit non urna et commodo. Cras sollicitudin orci ante, sed elementum tellus ullamcorper a.'
        })
    }
}
