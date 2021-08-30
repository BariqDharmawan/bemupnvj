import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import OurContact from 'App/Models/OurContact'

export default class OurContactSeeder extends BaseSeeder {
    public async run() {
        await OurContact.create({
            address: 'Jl. RS. Fatmawati Raya, Pd. Labu, Kec. Cilandak, Kota Depok',
            email: 'upnvj@upnvj.ac.id',
            telephone: '0217656971',
            embed_map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.339320100505!2d106.83199531476913!3d-6.218907195498191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3d516c32bb7%3A0xd64d19ed8c9cebb2!2sHolywings%20Epicentrum!5e0!3m2!1sid!2sid!4v1630314071024!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
            desc_contact_page: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan lacinia fringilla. Curabitur vel mollis eros, sit amet auctor elit. Nunc nisl tellus, molestie nec nibh at, rutrum imperdiet purus. Aliquam vitae diam quis nisl ullamcorper viverra quis eget tellus. In venenatis eros in congue tincidunt. Aenean semper accumsan dui ut tempor. Integer hendrerit non urna et commodo. Cras sollicitudin orci ante, sed elementum tellus ullamcorper a.'
        })
    }
}
