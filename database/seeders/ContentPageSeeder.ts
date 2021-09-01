import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ContentPage from 'App/Models/ContentPage'

export default class ContentPageSeeder extends BaseSeeder {
    public async run() {
        const descPage = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, harum beatae. Perferendis laudantium temporibus, illum repudiandae rerum eveniet blanditiis asperiores'
        
        await ContentPage.createMany([
            {
                page_name: 'contact',
                desc_page: descPage
            },
            {
                page_name: 'about-us',
                desc_page: descPage
            }
        ])
    }
}
