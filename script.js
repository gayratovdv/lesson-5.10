const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const todoForm = document.querySelector("form");

todoBtn.addEventListener("click", addTodo);

function addTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement("div")
    const newDiv = document.createElement("div")
    const newTodo = document.createElement("li");

    todoDiv.classList.add("todo-div");
    newDiv.classList.add("new-div");
    newTodo.classList.add("todo-item");
    
    todoList.appendChild(todoDiv);
    todoDiv.appendChild(newTodo);
    todoDiv.appendChild(newDiv)
    newTodo.innerHTML = todoInput.value;

    // create check

    const todoCheck = document.createElement("button")
    todoCheck.innerHTML = '<i class="fa-solid fa-check"></i>';
    todoCheck.classList.add("todo-check")

    newDiv.appendChild(todoCheck)

    // create trash

    const todoTrash = document.createElement("button")
    todoTrash.innerHTML = '<i class="fa-solid fa-trash"></i>';
    todoTrash.classList.add("todo-trash")

    newDiv.appendChild(todoTrash)

    // trash

    todoTrash.addEventListener("click", trashEvent)

    function trashEvent(event) {
        event.preventDefault();
        
        todoDiv.remove();
    }

    // check

    todoCheck.addEventListener("click", checkEvent)

    function checkEvent(event) {
        event.preventDefault(); 

        todoDiv.classList.toggle("completed");
    }

    todoInput.value = "";
}