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