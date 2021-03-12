/*const heading=document.querySelector('h1');
const todoList=document.querySelector('#todo_list').innerHTML;
const todoListItem=document.querySelector('.todo-list-item');
const todoListItems=document.querySelectorAll('.todo-list-item');*/

const todoList=document.getElementById('todo_list').innerHTML;
const todoListItem=document.getElementsByClassName('todo-list-item');
const heading=document.getElementsByTagName('h1');
const todoInput=document.getElementById('todo_input');

/*for(item of todoInput){
    console.log(item.value)
}*/
/*for(let i=0; i<todoListItems.length; i++){
    console.log(todoListItems[i].innerHTML)
}*/
/*
todoListItems.forEach((item)=>{
    console.log(item.innerHTML)})*/
