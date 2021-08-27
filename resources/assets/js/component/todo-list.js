import { storeAjax } from "../function/store-ajax"
import { updateAjax } from "../function/update-ajax"

const todoList = $('.todo-list').sortable({
    placeholder: 'sort-highlight',
    handle: '.handle',
    forcePlaceholderSize: true,
    zIndex: 999999,
})

//update #list-missions order
$("#list-missions").on('sortupdate', function (event, ui) {

    const allItem = $(this).find("li")
    const totalAllItem = allItem.length

    let updatedListId = $(this).sortable('toArray', {attribute: 'data-id'})
    updatedListId = updatedListId.map(id => Number(id))

    storeAjax('/mission/update-all-list', {
        updated_list_Id: updatedListId
    })

    allItem.each(function (i, el) {

        $(this).find('.todo-list__number--circle').text(Number(i) + 1)
    })


})