function addItem(){
    let inputBox=document.getElementById('todo_input');
    if(inputBox.value){
        const listItem=document.createElement('li');
        listItem.className='todo-list-item'
        listItem.innerHTML=inputBox.value;
        document.getElementById('todo_list').appendChild(listItem);
        inputBox.value="";
    }else{
        alert('Input box cannot be empty')
    }
    
}