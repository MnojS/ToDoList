// Selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption =document.querySelector('.filter-todo');

// Evenet Listeners
todoButton.addEventListener("click" , addTodo);
todoList.addEventListener("click" , deleteCheck);
filterOption.addEventListener("click",filterTodo);

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

function filterTodo(e){
    const todos = todoList.childNodes;
    console.log(todos);
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }
                else{
                    todo.style.display = "none";
                }
        }
    })
}

