
const todobutton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");
const todoinput=document.querySelector(".todo-input");

todobutton.addEventListener("click",addtodo);


function addtodo(event){
    event.preventDefault();

    const tododiv =document.createElement("div");
    tododiv.classList.add("todo");

    const newtodo=document.createElement("li");
    newtodo.innerText= todoinput.value;
    newtodo.classList.add("todo-item");
    tododiv.appendChild(newtodo);
    
    const completedButton = document.createElement("button");
    completedButton.innerHTML='<i class="fas fa-check-square"></i>';
    completedButton.classList.add("complete-btn");
    tododiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    tododiv.appendChild(trashButton);

    todolist.appendChild(tododiv);

    todoinput.value=" ";
}

todolist.addEventListener("click",deletecheck);
function deletecheck(e) {
    const item = e.target;
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.remove();
    }
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
    if(item.classList[0] === "todo-item"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

