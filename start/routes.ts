import Route from '@ioc:Adonis/Core/Route'
import './routeAuth'
import './routeApi'

Route.get('/', 'HomeController.index').as('landing_page')

Route.get('contact-us/manage', 'OurContactController.manage')
    .as('contact_us.manage').middleware(['auth'])
Route.resource('contact-us', 'OurContactController').only([
    'index', 'store', 'update', 'destroy'
])

Route.resource('our-social', 'OurSocialsController').only([
    'store', 'update', 'destroy'
]).middleware({'*': ['auth']})

Route.resource('our-contact', 'OurContactController').only([
    'store', 'destroy'
]).middleware({'*': ['auth']})
Route.put('our-contact/update', 'OurContactController.update').as('our_contact.update')

Route.resource('mission', 'OurMissionsController').apiOnly().middleware({'*': ['auth']})
Route.post('mission/update-all-list', 'OurMissionsController.updateAllList')
    .as('mission.update_all-list')

Route.get('about-us/vision-mission', 'AboutUsController.manageVisionMission')
.as('about_us.vision_mission').middleware(['auth'])
Route.resource('about-us', 'AboutUsController').except(['create', 'edit'])

//method store is for frontend page
Route.resource('lead', 'LeadsController').only(['index', 'store', 'destroy'])

Route.group(() => {
    Route.get('dashboard', 'DashboardController.index').as('dashboard')
    Route.get('aspirations/manage', 'AspirationsController.manage').as('aspirations.manage')
    Route.group(() => {
        Route.get('manage', 'BlogsController.manage').as('manage')
        Route.resource('category', 'BlogsController').only(['store', 'update', 'destroy'])
    }).prefix('blog').as('blog')

    Route.resource('primary-cover', 'HomeCoversController').only([
        'index', 'store', 'destroy'
    ])

}).as('admin').middleware('auth')


Route.resource('blog', 'BlogsController')

Route.resource('aspirations', 'AspirationsController').only([
    'index', 'store', 'destroy'
])