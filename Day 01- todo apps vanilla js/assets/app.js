/* 
Create To do Task list
*/

const btn = document.getElementById('btn-add');


// add event listener
btn.addEventListener('click', () => {
    const todoField = document.getElementById('todo');
    const todoValue = todoField.value;
    todoField.value = ''

    // select unorderd list 
    const ul = document.querySelector('.list-group');
    // create element 
    const li = document.createElement('li');
    li.classList.add('list-group-item')

    const todoTaskHtml = `
                    <div class="d-flex justify-content-between">
                        <div class="form-check">
                            <input type="checkbox" name="task" id="task" class="form-check-input">
                            <label for="task" class="form-check-label">${todoValue}</label>
                        </div>
                        <div class="delete">
                            <i class="fa-solid fa-circle-minus text-danger"></i>
                        </div>
                    </div>
                    `

    li.innerHTML = todoTaskHtml
    ul.appendChild(li)
});


/*
Create Event Listner for delete
*/
ul = document.querySelector(".list-group");

ul.addEventListener('click', (e) => {
    item = e.target

    // Delete Task
    if (item.classList[1] === 'fa-circle-minus') {
        task = item.parentElement.parentElement.parentElement
        task.remove()
    }

    // Check Task
    if (item.type === 'checkbox' || item.classList[0] === 'form-check-label') {
        label = item.nextElementSibling
        if (item.checked) {

            label.classList.add('line')
        } else {
            label.classList.remove('line')
        }
    }

})

