import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('primary-cover', 'HomeCoversController.getCover').as('primary_cover.getCover')
    Route.get('mission', 'OurMissionsController.getMission').as('mission.getMission')
    Route.get('article/:id', 'BlogsController.getSingleArticle').as('mission.getArticle')
    Route.get('news-portal', 'NewsController.getNews').as('news_portal')
    Route.get('info-mahasiswa', 'StudentInfoController.getInfoBeasiswa').as('student_info')
    
    Route.group(() => {
        Route.get('past', 'EventController.getPast').as('past')
        // Route.get('upcoming', 'EventController.getUpcoming').as('upcoming')
    }).as('event').prefix('event')

}).as('api').prefix('api')