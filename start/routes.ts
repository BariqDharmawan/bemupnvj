import Route from '@ioc:Adonis/Core/Route'
import './routeAuth'
import './routeApi'

Route.get('/', 'HomeController.index').as('landing_page')


Route.post('mission/update-all-list', 'OurMissionsController.updateAllList')
    .as('mission.update_all-list')

//method store is for frontend page
Route.resource('lead', 'LeadsController').only(['index', 'store', 'destroy'])
    .middleware({'index': ['auth']})

Route.get('blog/manage', 'BlogsController.manage').as('blog.manage').middleware('auth')
Route.get('blog/:slug', 'BlogsController.show').as('blog.show').middleware('auth')
Route.resource('blog', 'BlogsController').only(['store', 'update', 'destroy'])

Route.group(() => {
    Route.resource('mission', 'OurMissionsController').apiOnly()
    Route.resource('our-social', 'OurSocialsController').only(['store', 'update', 'destroy'])
    
    Route.group(() => {
        Route.get('vision-mission', 'AboutUsController.manageVisionMission').as(
            'vision_mission'
        )
        Route.get('content', 'AboutUsController.content').as('content')
    }).prefix('about-us').as('about_us')
    
    Route.get('our-contact/manage', 'OurContactController.manage').as('our_contact.manage')
    Route.resource('our-contact', 'OurContactController').only(['store', 'destroy'])
    Route.put('our-contact/update', 'OurContactController.update').as('our_contact.update')

    
    
    Route.resource('blog-category', 'BlogsController').only(['store', 'update', 'destroy'])
    
    Route.group(() => {
        Route.get('dashboard', 'DashboardController.index').as('dashboard')
        Route.get('contact-us/content', 'ContactusesController.content').as(
            'contact_us.content'
        )
        Route.resource('contact-us', 'ContactusesController')
        Route.resource('primary-cover', 'HomeCoversController').only([
            'index', 'store', 'destroy'
        ])
        Route.put('content-page/:page_name', 'ContentPagesController.update').as(
            'content_page.update'
        )
    }).as('admin')

}).middleware(['auth'])

Route.resource('about-us', 'AboutUsController').except(['create', 'edit', 'update'])
Route.put('about-us/update', 'AboutUsController.update').as('about_us.update')

Route.get('aspirations/manage', 'AspirationsController.manage').as('aspirations.manage')
Route.resource('aspirations', 'AspirationsController').only(['index', 'store', 'destroy'])