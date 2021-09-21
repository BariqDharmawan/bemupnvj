import axios from "axios"
import { appendNCopies } from "../function/helper"
import { lazyLoadInstance } from "./lazyload"

const btnLoadMore = document.querySelectorAll('.btn-load-more')
let nextUrl = ''
let articleBaseUrl = ''

btnLoadMore.forEach((loadMore) => {

    let currentPage = 1
    let lastPage = loadMore.dataset.lastPage
    let parentData = document.querySelector(loadMore.dataset.parentRecord)
    let articleEl = null

    loadMore.addEventListener('click', function () {

        if (currentPage < lastPage) {
            currentPage = currentPage + 1

            nextUrl = `/api${window.location.pathname}?page=${currentPage}`

            console.info(`currentPage: ${currentPage}`, `lastPage: ${lastPage}`, `nextUrl: ${nextUrl}`)
            
            axios.get(nextUrl)
                .then((response) => {
                    const nextNews = response.data.data
                    const totalNextNews = nextNews.length
                    console.log(`totalNextNews: ${totalNextNews}`, nextNews)

                    for (const news of nextNews) {
                        //copy element to prevent hardcode html tag when print the result
                        articleEl = parentData.querySelector('.article-to-load-more')
                                              .cloneNode(true)
                        articleBaseUrl = `/${articleEl.querySelector('.article__title').getAttribute('href').split('/')[1]}`
                        
                        console.info(`articleBaseUrl: ${articleBaseUrl}`)

                        articleEl.querySelector('img').dataset.src = news.cover
                        articleEl.querySelector('img').src = news.cover

                        articleEl.querySelector('img').setAttribute(
                            'alt', `${news.title} BEMUPNVJ`
                        )

                        articleEl.querySelector('.article__title').textContent = news.title
                        articleEl.querySelector('.article__title').href = 
                            `${articleBaseUrl}/${news.id}`

                        if (articleEl.querySelector('.article__excerpt')) {
                            articleEl.querySelector('.article__excerpt').innerHTML 
                            = news.content.substr(0, 200) + ' [...]';
                        }
                        
                        parentData.appendChild(articleEl)

                        loadMore.hidden = totalNextNews - 1 == 0 ? true : false
               
                    }

                })
                .catch(error => console.error(error))
            
        }
        
        console.log(currentPage)
        lazyLoadInstance.update()

    })
})