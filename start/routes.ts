import Route from '@ioc:Adonis/Core/Route'
import Env from '@ioc:Adonis/Core/Env'

Route.get('/', async ({ view }) => {
    return view.render('welcome', {appName: Env.get('APP_NAME')})
})

Route.resource('primary-cover', 'HomeCoversController').only([
    'index', 'store', 'destroy'
])
Route.resource('blog', 'BlogsController')
Route.resource('blog-category', 'BlogsController').only(['store', 'update', 'destroy'])
Route.resource('aspirations', 'AspirationsController').only([
    'index', 'store', 'destroy'
])
Route.get('manage-vision-mission', 'AboutUsController.')
Route.resource('about-us', 'AboutUsController').except(['create', 'edit'])

//create, update, delete mission, also manage vision-mission on index method
Route.resource('mission', 'OurMissionsController').only(['store', 'destroy', 'update'])

Route.resource('our-social-media', 'OurSocialsController').only([
    'index', 'store', 'update', 'destroy'
])

//method store is for frontend page
Route.resource('lead', 'LeadsController').only(['index', 'store', 'destroy'])