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
                bodyData += "<li class='row mx-0 align-items-center'>"

                bodyData += "<div class='col-2'>" +
                                "<span class='handle'>" +
                                    "<i class='fas fa-ellipsis-v'></i>" +
                                    "<i class='fas fa-ellipsis-v'></i>" +
                                "</span>" +
                            "</div>"
                bodyData += "<div class='col-8'>" +
                                "<p class='text'>" + row.content + "</p>" +
                            "</div>"

                bodyData += "<div class='col-2'>" +
                                "<div class='tools'>" +
                                    "<button type='button'" +
                                    "class='btn btn-default border-0' data-toggle='modal'" + "data-target='#modal-edit-mission- " + 
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