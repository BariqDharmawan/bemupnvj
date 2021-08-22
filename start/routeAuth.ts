import Route from '@ioc:Adonis/Core/Route'

Route.post('logout', 'AuthController.logout').as('admin.logout')
Route.group(() => {
    Route.get('/', 'AuthController.index').as('index')
    Route.post('post', 'AuthController.store').as('store')
}).prefix('login').as('admin.login')