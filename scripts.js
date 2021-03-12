function addItem(){
    let inputBox=document.getElementById('todo_input');
    if(inputBox.value){
        const listItem=document.createElement('li');
        listItem.className='todo-list-item'
        listItem.innerHTML=inputBox.value;
        listItem.onclick=()=>{removeItem(listItem)};
        document.getElementById('todo_list').appendChild(listItem);
        inputBox.value="";
    }else{
        alert('Input box cannot be empty')
    }
    
}
function removeItem(listItem){
    /*const isConfirmed=confirm('Are you sure?');
    if(isConfirmed){
        listItem.remove();
    }
    */
    document.getElementById('todo_list').removeChild(listItem)
}