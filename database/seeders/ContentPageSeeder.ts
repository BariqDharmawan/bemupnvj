import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ContentPage from 'App/Models/ContentPage'

export default class ContentPageSeeder extends BaseSeeder {
    public async run() {
        const descPage = `<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p> 
        <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.
        </p>
        <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.
        </p>
        <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.
        </p>`
        
        await ContentPage.createMany([
            {
                logo: '/assets/img/content/dummy/info-mahasiswa-dummy-logo.svg',
                page_name: ContentPage.pageName[0],
                desc_page: '',
            },
            {
                logo: '/assets/img/content/dummy/info-mahasiswa-dummy-logo.svg',
                page_name: ContentPage.pageName[1],
                desc_page: '',
            },
            {
                logo: '/assets/img/content/dummy/info-mahasiswa-dummy-logo.svg',
                page_name: ContentPage.pageName[2],
                desc_page: '',
            },
            {
                logo: '',
                page_name: ContentPage.pageName[3],
                desc_page: descPage
            },
            {
                logo: '',
                page_name: ContentPage.pageName[4],
                desc_page: descPage
            }
        ])
    }
}
