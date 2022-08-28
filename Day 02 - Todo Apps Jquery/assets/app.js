// Adding to list
$(document).ready(() => {
    $('#btn-add').click(() => {
        let todoTask = $('#todo').val()

        let liElement =
            `
            <li class="list-group-item">
                <div class="d-flex justify-content-between">
                        <div class="form-check">
                            <input type="checkbox" name="task" class="form-check-input">
                            <label for="task" class="form-check-label">${todoTask}</label>
                        </div>
                        <div class="delete">
                            <i class="fa-solid fa-circle-minus text-danger"></i>
                        </div>
                </div>
            </li>
            `
            ;

        $('.list-group').append(liElement)
        $('#todo').val('')

    })
});


// delete and change functionality

$('.list-group').click((event) => {
    let nodeName = event.target.nodeName

    if (nodeName === 'I') {
        target = $(event.target).parentsUntil('.list-group')
        target.remove()
    }

    if (nodeName === 'INPUT') {
        task = event.target
        label = $(event.target).next()
        if ((event.target).checked) {
            label.css('text-decoration', 'line-through')
        } else {
            label.css('text-decoration', 'none')
        }

    }
})




