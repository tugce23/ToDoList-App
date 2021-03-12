function addItem(){
    let inputBox=document.getElementById('todo_input');
    const listItem=document.createElement('li');
    listItem.className='todo-list-item'
    listItem.innerHTML=inputBox.value;
    document.getElementById('todo_list').appendChild(listItem);
    inputBox.value="";
}