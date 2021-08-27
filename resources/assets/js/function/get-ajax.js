function getNewBanner() {
    $.ajax({
        type: "GET",
        url: '/api/primary-cover',
        dataType: 'json',
        cache: false,
        success: function (data) {
            $("#primary-cover").attr('src', data.filename)
            $(".dropzone").attr('data-old-banner-id', data.id)
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getMission() {
    $.ajax({
        type: "GET",
        url: '/api/mission',
        dataType: 'json',
        cache: false,
        success: function (data) {
            $("#list-missions").html('')
            $.each(data, function(index,row){
                let bodyData = '';
                let editUrl = '/missions/'+row.id+"/edit";
                bodyData += "<li class='row mx-0 align-items-center'" +
                            "data-current-order='" + row.order_number + "' data-id='" + 
                            row.id + "'>"

                bodyData += "<div class='col-auto'>" +
                                "<span class='handle ui-sortable-handle'>" +
                                    "<i class='fas fa-ellipsis-v'></i>" +
                                    "<i class='fas fa-ellipsis-v'></i>" +
                                "</span>" +
                            "</div>"
                bodyData += "<div class='col row mx-0 align-items-center'>" +
                                "<var class='font-style-normal mr-2 bg-dark rounded-circle d-flex align-items-center justify-content-center todo-list__number--circle'>" + 
                                    row.order_number + 
                                "</var>" +
                                "<textarea class='form-control-plaintext col change-readonly-input no-resize no-focus' data-is-plaintext='true'" +
                                "data-action-url='mission/update/" + row.id + "'" +
                                "id='mission-content-" + (Number(index) + 1) + "'" +
                                "readonly>" + row.content + "</textarea>" +
                            "</div>"

                bodyData += "<div class='col-2'>" +
                                "<div class='tools'>" +
                                    "<button type='button'" +
                                    "class='btn btn-default border-0 btn--change-readonly-to-editable' data-input='#mission-content-" + 
                                    (Number(index) + 1) + "'>" +
                                        "<i class='fas fa-edit'></i>" +
                                    "</button>" +
                                    "<button type='button' class='btn btn-danger border-0'" +
                                    "data-toggle='modal'" +
                                    "data-target='#modal-delete-mission-" + 
                                    (Number(index) + 1) + "'>" +
                                        "<i class='fas fa-trash'></i>" +
                                    "</button>" +
                                "</div>" +
                            "</div>"

                bodyData += "</li>";
                $("#list-missions").append(bodyData)
                
            })
        },
        error: function (error) {
            console.log(error);
        }
    })
}

export {getNewBanner, getMission}