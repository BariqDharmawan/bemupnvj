import Route from '@ioc:Adonis/Core/Route'
import './routeAuth'
import './routeApi'

Route.get('/', 'HomeController.index').as('landing_page')

Route.post('mission/update-all-list', 'OurMissionsController.updateAllList')
    .as('mission.update_all-list')

Route.group(() => {
    Route.resource('mission', 'OurMissionsController').apiOnly()
    Route.resource('our-social', 'OurSocialsController').only(['store', 'update', 'destroy'])
    
    Route.group(() => {
        Route.get('vision-mission', 'AboutUsController.manageVisionMission')
            .as('vision_mission')
        Route.get('content', 'AboutUsController.content').as('content')
        Route.get('profile', 'AboutUsController.profile').as('profile')
    }).prefix('about-us').as('about_us')
    
    Route.get('our-contact/manage', 'OurContactController.manage').as('our_contact.manage')
    Route.resource('our-contact', 'OurContactController').only([
        'store', 'destroy', 'update'
    ])
    
    Route.get('aspirations/manage', 'AspirationsController.manage').as('aspirations.manage')
    
    Route.group(function () {
        Route.get('manage', 'BlogsController.manage').as('manage')
    }).prefix('blog').as('blog')

    Route.group(() => {
        Route.get('content', 'ContactusesController.content').as('content')
        Route.get('manage', 'ContactusesController.manage').as('manage')
    }).prefix('contact-us').as('contact_us')
    
    Route.group(() => {
        Route.get('dashboard', 'DashboardController.index').as('dashboard')
        
        Route.resource('primary-cover', 'HomeCoversController').only([
            'index', 'store', 'destroy'
        ])
        Route.put('content-page/:page_name', 'ContentPagesController.update').as(
            'content_page.update'
        )
        Route.resource('blog-category', 'BlogCategoriesController').only([
            'store', 'update', 'destroy'
        ])
    }).as('admin')
    
    Route.resource('aspiration-category', 'AspirationCategoriesController').only([
        'store', 'update'
    ])

    Route.resource('content-page', 'ContentPagesController')

}).middleware(['auth'])

Route.resource('blog', 'BlogsController').only([
    'show', 'store', 'update', 'destroy'
]).middleware({
    'store': ['auth'],
    'update': ['auth'],
    'destroy': ['auth'],
})

Route.resource('about-us', 'AboutUsController').except(['create', 'edit', 'update', 'show'])
Route.resource('contact-us', 'ContactusesController')
Route.put('about-us/update', 'AboutUsController.update').as('about_us.update')

Route.get('visi-misi', 'AboutUsController.visionMission').as('vision_mission')

Route.group(() => {
    Route.get('/', 'LogoMeaningsController.index').as('index')
    Route.get('/manage', 'LogoMeaningsController.manage').as('manage')
}).as('logo_meaning').prefix('makna-logo')

Route.group(() => {
    Route.get('/', 'StudentInfoController.index').as('index')
    Route.get('scholarship-and-career', 'StudentInfoController.scholareer').as('scholareer')
}).as('info_mahasiswa').prefix('info-mahasiswa')

Route.group(() => {
    Route.get('past', 'EventController.past').as('past')
    Route.get('upcoming', 'EventController.upcoming').as('upcoming')
}).as('event').prefix('event')

Route.get('news-portal', 'NewsController.portal').as('news_portal')

Route.resource('aspirations', 'AspirationsController').only([
    'index', 'store', 'destroy'
]).middleware({'destroy': ['auth']})