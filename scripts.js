function addItem(){
    const inputValue=document.getElementById('todo_input').value;
    const listItem=document.createElement('li');
    listItem.className='todo-list-item'
    listItem.innerHTML=inputValue;
    document.getElementById('todo_list').appendChild(listItem)
}