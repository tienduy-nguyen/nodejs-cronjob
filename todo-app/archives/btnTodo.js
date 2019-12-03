// const btns = document.querySelectorAll('button');
// var count = 0;
// btns[btns.length-1].addEventListener('click',function(e, count){
//     ++count;
//     // addNote('Add a new item',count);
//     console.log('Add a new todo')});

// let querries = document.querySelectorAll('div');
// let newTodo = document.createElement('p');
// let addNote1 = querries[querries.length-1].appendChild(newTodo);
// var addNote = function(text,count){
//     newTodo.textContent = text + ' ' + count;
//     querries[querries.length-1].appendChild(newTodo)
// }

document.querySelector('#btnCreate-note').addEventListener('click',function(e){
    e.target.textContent = 'Button clicked by btnCreate-note';
})
document.querySelector('#btnTodo').addEventListener('click',function(e){
    e.target.textContent = 'Button clicked by btnTodo';
})