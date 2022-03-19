document.querySelector('form').addEventListener("submit", handleSubmitForm);
document.querySelector('ul').addEventListener("click", handleClickDeleteOrCheck);
document.getElementById('clearAll').addEventListener("click", handleClearAll);

function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '') 
        addToDo(input.value);
    input.value = ""
}
function handleClickDeleteOrCheck(e) {
    if (e.target.name == 'checkButton') 
        checkTodo(e);

    if (e.target.name == 'deleteButton')
        deleteTodo(e);

}

function handleClearAll(e) { 
    document.querySelector('ul').innerHTML = '';

}


function addToDo (toDo) {
    let ul = document.querySelector('ul'); 
    let li = document.createElement('li');
    
    li.innerHTML = `

    <span class="todo-items">${toDo}</span> 
    <button class="list-btn" name="checkButton"><i class="fas fa-check"></i></button>
    <button class="list-btn" name="deleteButton"><i class="fas fa-trash"></i></button>
    `;  
    li.classList.add("todo-List");

    ul.appendChild(li);
    

}

function checkTodo(e) {

    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through')
    item.style.textDecoration = "none";
    else
    item.style.textDecoration = "line-through";
}
function deleteTodo(e) {
    let item = e.target.parentNode;
    item.remove();
}
