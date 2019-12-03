'use strict'


let todos = getSaveTodos();
//Filter toto
const filters = {
    searchText: ''
}
//Add a new todo
const newTodo = {
    text: ''
}
const check = {
    isHide: false
}
renderTodos(todos, filters, check.isHide); //Write a list todo on the screen when page initialize

document.querySelector('#iptFilters').addEventListener('input', function (e) {
    filters.searchText = e.target.value;

    document.querySelector('#chkHideComplete').addEventListener('change', function (e) {
        check.isHide = e.target.checked;
    })
    renderTodos(todos, filters, check.isHide);
})
//Using form, don't need update the text form input
//Possible using Enter to validate the data
document.querySelector('#frmTodo').addEventListener('submit', function (e) {
    // console.log(isExist(todos,newTodo.text));
    e.preventDefault();
    const value = e.target.elements.iptTodo.value;
    // console.log(isExist(todos, value) ==false);
    // console.log(!isExist(todos, value));
    try {
        //if todo not undefined, not null
        if (!isExist(todos, value) && !isNullOrWhitespace(value)) {
            todos.push({
                id: uuidv4(),
                text: e.target.elements.iptTodo.value,
                completed: false
            })
            // console.log('Button clicked');
            saveTodos(todos);
        }
        renderTodos(todos, filters, check.isHide);
        e.target.elements.iptTodo.value = '';
    } catch (e) {
    }
})

document.querySelector('#chkHideComplete').addEventListener('change', function (e) {
    check.isHide = e.target.checked;
    renderTodos(todos, filters, check.isHide);
    // console.log(e.target.checked);
})

