// Selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Evenet Listeners
todoButton.addEventListener("click" , addTodo);
todoList.addEventListener("click" , deleteCheck);

// Functions

function addTodo(event){
    event.preventDefault();

        // <div class="todo">
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

        // create li
    const newTodo = document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

        // button
    const compltedButton = document.createElement('button');
    compltedButton.innerHTML = '<i class="fas fa-check"></i>';
    compltedButton.classList.add("complete-btn");
    todoDiv.appendChild(compltedButton);

        // check trash  butoon
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value="";

}

function deleteCheck(e){
    const item = e.target;

    // Delete
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
        
    }

    // check
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}
