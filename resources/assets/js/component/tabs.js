import { deactiveSiblings } from "../function/switch-tab"

$(".nav-pills .nav-link").on('click', function () {
    deactiveSiblings($(this))
})

let activeTab, 
    activeTabName;
let defaultActiveTabName = $('#tab-article .nav-item:first-child a[data-toggle="pill"]')
                        .attr('href');
activeTabName = defaultActiveTabName;
$('#tab-article a[data-toggle="pill"]').on('shown.bs.tab', function (event) {
    activeTab = event.target;
    activeTabName = activeTab.getAttribute('href');
    const previousActive = event.relatedTarget;

    $("[name='blog_category_id']").val(activeTab.dataset.categoryId);
    console.log(activeTabName);
})

$("#tab-blog")

export {activeTab, activeTabName, defaultActiveTabName}