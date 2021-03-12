const todoList=localStorage.getItem('todoList').split(',');
todoList.forEach((element)=>{
    let todoList=document.getElementById('todo_list');
    todoList.innerHTML+=`<li onclick="this.remove()">${element}</li>`
})

function addItem(){
    let inputBox=document.getElementById('todo_input');
    if(inputBox.value){
        const listItem=document.createElement('li');
        listItem.className='todo-list-item'
        listItem.innerHTML=inputBox.value;
        listItem.onclick=()=>{document.getElementById('todo_list').removeChild(listItem)};
        document.getElementById('todo_list').appendChild(listItem);
        inputBox.value="";
        todoList.push(listItem.innerHTML);
        localStorage.setItem('todoList',todoList)
    }else{
        alert('Input box cannot be empty')
    }
    
}

    
