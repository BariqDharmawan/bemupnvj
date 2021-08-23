import Route from '@ioc:Adonis/Core/Route'
import './routeAuth'
import './routeApi'

Route.get('/', 'HomeController.index').as('landing_page')

Route.resource('contact-us', 'OurSocialsController').only([
    'index', 'store', 'update', 'destroy'
])

Route.resource('mission', 'OurMissionsController').apiOnly().middleware({'*': ['auth']})

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