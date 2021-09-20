import axios from "axios"
import { appendNCopies } from "../function/helper"
import { lazyLoadInstance } from "./lazyload"

const btnLoadMore = document.querySelectorAll('.btn-load-more')
let nextUrl = ''
let newsExcerpt = ''
let newsTitle = ''

btnLoadMore.forEach((loadMore) => {

    let currentPage = 1, lastPage = loadMore.dataset.lastPage
    let parentData = document.querySelector(loadMore.dataset.parentRecord)
    let articleEl = null

    loadMore.addEventListener('click', function () {

        if (currentPage < lastPage) {
            currentPage = currentPage + 1
            nextUrl = `api${window.location.pathname}?page=${currentPage}`
            
            axios.get(nextUrl)
                .then((response) => {
                    const nextNews = response.data.data
                    const totalNextNews = nextNews.length
                    console.log(`totalNextNews: ${totalNextNews}`)

                    for (const news of nextNews) {
                        //copy element to prevent hardcode html tag when print the result
                        articleEl = parentData.querySelector('.article-to-load-more')
                                              .cloneNode(true)

                        newsExcerpt = news.content.substr(0, 200) + ' [...]';
                        newsTitle = news.title
                        
                        articleEl.id = news.slug
                        articleEl.querySelector('img').dataset.src = news.cover
                        articleEl.querySelector('img').src = news.cover

                        articleEl.querySelector('img').setAttribute(
                            'alt', `${newsTitle} BEMUPNVJ`
                        )

                        articleEl.querySelector('.article__title').textContent = newsTitle
                        articleEl.querySelector('.article__excerpt').innerHTML = newsExcerpt
                        
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