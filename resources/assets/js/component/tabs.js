import { deactiveSiblings } from "../function/switch-tab"

$(".nav-pills .nav-link").on('click', function () {
    deactiveSiblings($(this))
    console.log('fix tabs')
})

//get #tab-article active and put the text to input blog_category_id as a value
const defaultTabArticleActive = $('#tab-article .nav-item:first-child a[data-toggle="pill"]')
                                .data('category-id')
$("[name='blog_category_id']").val(defaultTabArticleActive)
$('#tab-article a[data-toggle="pill"]').on('show.bs.tab', function (event) {
    const activeTab = event.target
    const previousActive = event.relatedTarget

    $("[name='blog_category_id']").val(activeTab.dataset.categoryId)
})