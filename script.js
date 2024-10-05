const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

function newAddition() {
    const listText = todoInput.value.trim();
    if (listText !== '') {
        const li = document.createElement('li');
        li.listContent = listText; 
        todoList.appendChild(li);
        todoInput.value = '';
    }
}

function completeTask(event) {
    const task = event.target;
    task.classList.toggle('Done');
}

li.addEventListner('click', taskDone);

function deleteTask(event) {
    const task = event.target.parentElement;
    todoList.removeChild(task);
}

const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.addEventListener('click', deleteTask);
li.appendChild(deleteButton);