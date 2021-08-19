import Route from '@ioc:Adonis/Core/Route'
import Env from '@ioc:Adonis/Core/Env'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

Route.get('/', 'HomeController.index')

Route.resource('contact-us', 'OurSocialsController').only([
    'index', 'store', 'update', 'destroy'
])

//create, update, delete mission, also manage vision-mission on index method
Route.resource('mission', 'OurMissionsController').only(['store', 'destroy', 'update'])

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

    Route.resource('primary-cover', 'HomeCoversController').only(['index', 'store', 'destroy'])
    
    // Route.group(() => {
    //     Route.get('/', 'AuthController.index').as('index')
    //     Route.post('post', 'AuthController.store').as('store')
    // }).prefix('login').as('login')

}).as('admin')


Route.resource('blog', 'BlogsController')

Route.resource('aspirations', 'AspirationsController').only([
    'index', 'store', 'destroy'
])