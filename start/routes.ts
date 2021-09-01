import Route from '@ioc:Adonis/Core/Route'
import './routeAuth'
import './routeApi'

Route.get('/', 'HomeController.index').as('landing_page')



Route.resource('our-social', 'OurSocialsController').only([
    'store', 'update', 'destroy'
]).middleware({'*': ['auth']})

Route.get('our-contact/manage', 'OurContactController.manage')
    .as('our_contact.manage').middleware(['auth'])
Route.resource('our-contact', 'OurContactController').only([
    'store', 'destroy'
]).middleware({'*': ['auth']})
Route.put('our-contact/update', 'OurContactController.update').as('our_contact.update')

Route.resource('mission', 'OurMissionsController').apiOnly().middleware({'*': ['auth']})
Route.post('mission/update-all-list', 'OurMissionsController.updateAllList')
    .as('mission.update_all-list')

Route.get('about-us/vision-mission', 'AboutUsController.manageVisionMission')
.as('about_us.vision_mission').middleware(['auth'])
Route.get('about-us/content', 'AboutUsController.content')
.as('about_us.content').middleware(['auth'])
Route.resource('about-us', 'AboutUsController').except(['create', 'edit', 'update'])
Route.put('about-us/update', 'AboutUsController.update').as('about_us.update')

//method store is for frontend page
Route.resource('lead', 'LeadsController').only(['index', 'store', 'destroy'])
    .middleware({'index': ['auth']})

Route.group(() => {
    Route.get('dashboard', 'DashboardController.index').as('dashboard')
    Route.get('aspirations/manage', 'AspirationsController.manage').as('aspirations.manage')
    Route.get('contact-us/content', 'ContactusesController.content').as('contact_us.content')
    Route.resource('contact-us', 'ContactusesController')
    Route.group(() => {
        Route.get('manage', 'BlogsController.manage').as('manage')
        Route.resource('category', 'BlogsController').only(['store', 'update', 'destroy'])
    }).prefix('blog').as('blog')

    Route.resource('primary-cover', 'HomeCoversController').only([
        'index', 'store', 'destroy'
    ])

    Route.put('content-page/:page_name', 'ContentPagesController.update')
        .as('content_page.update')

}).as('admin').middleware('auth')


Route.resource('blog', 'BlogsController')

Route.resource('aspirations', 'AspirationsController').only([
    'index', 'store', 'destroy'
])