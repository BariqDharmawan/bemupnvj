import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('primary-cover', 'HomeCoversController.getCover').as('primary_cover.getCover')
    Route.get('mission', 'OurMissionsController.getMission').as('mission.getMission')
    Route.get('article/:id', 'BlogsController.getSingleArticle').as('mission.getArticle')
    Route.get('news-portal', 'NewsController.getNews').as('news_portal')
}).as('api').prefix('api')