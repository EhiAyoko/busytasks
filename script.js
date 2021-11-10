//output today's date
const date = document.getElementById('date');
options = {weekday: "long", month: "short", day: "numeric"};
const today = new Date();
date.innerHTML = today.toLocaleDateString("en-US", options)

const list = document.querySelector('#list')
let id = 0;

//UI object
class UI{
    static addToDoList(toDo, id){
console.log(toDo);
    }
}

// if press ENTER then call addNewToDo()
document.addEventListener("keyup", function(){
    if(event.keyCode == 13){
        const toDoItem = input.value;
        // a little validation
        if(toDoItem){
            UI.addToDoList(toDoItem, id);
            id++;
        }
    }
})