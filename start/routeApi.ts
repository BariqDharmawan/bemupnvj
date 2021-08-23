import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('primary-cover', 'HomeCoversController.getCover').as('primary_cover.getCover')
    Route.get('mission', 'OurMissionsController.getMission').as('mission.getMission')
}).as('api').prefix('api')