document.getElementById('addBtn').addEventListener('click', addTodo);

function addTodo() {
    const input = document.getElementById('newTodo');
    const taskText = input.value.trim();
    if (taskText === '') return;

    const todoItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', toggleComplete);

    const task = document.createElement('span');
    task.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', deleteTodo);

    todoItem.appendChild(checkbox);
    todoItem.appendChild(task);
    todoItem.appendChild(deleteBtn);

    document.getElementById('todoList').appendChild(todoItem);
    input.value = '';
}
function toggleComplete(event) {
    const item = event.target.parentElement;
    item.classList.toggle('completed');
    item.parentElement.appendChild(item);  // Move completed task to the bottom
}

function deleteTodo() {
    const item = this.parentElement;
    item.classList.add('fadeOut');
    setTimeout(() => item.remove(), 300); // Add fade-out effect before deletion
}
function playSound() {
    const audio = new Audio('ding.mp3'); // Ensure 'ding.mp3' exists in your project folder
    audio.play();
}
