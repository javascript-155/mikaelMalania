function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value;

    if (todoText === '') {
        alert('Please enter a todo');
        return;
    }

    // ძველი მონაცემების მიღება ლოკალური მეხსიერებიდან todos

    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    todos.push(todoText);

    // მონაცემების შენახვა ლოკალურ მეხსიერებაში

    localStorage.setItem('todos', JSON.stringify(todos));

    todoInput.value = '';

    updateTodoList();
}

// todos ჩამონათვლის განახლების ფუნქცია
function updateTodoList() {
    const todoListElement = document.getElementById('todoList');
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    todoListElement.innerHTML = '';

    todos.forEach((todo, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'todoItem';
        listItem.innerHTML = `
        <span>${todo}</span>
        <span class="deleteButton" onclick="deleteTodoItem(${index})">X</span>
        `;
        todoListElement.appendChild(listItem);
    });

}

// ეს გვჭირდება თავდაპირველად გვერდის ჩატვირთვისას
updateTodoList();

function deleteTodoItem(index) {
    // ძველი მონაცემების მიღება ლოკალური მეხსიერებიდან todos
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    todos.splice(0, 1);

    localStorage.setItem('todos', JSON.stringify(todos));

    updateTodoList();

}