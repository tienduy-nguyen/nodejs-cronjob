'use strict'

let todos = getSaveTodos();
//Filter toto
const filters = {
    searchText: '',
    hideCompleted: false
}
//Add a new todo

renderTodos(todos, filters); //Write a list todo on the screen when page initialize

document.querySelector('#iptFilters').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
})
document.querySelector('#chkHideComplete').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
})
document.querySelector('#btnDeleteComplete').addEventListener('click', function (e) {
    deleteCompletedTodos(todos);
})
//Using form, don't need update the text form input
//Possible using Enter to validate the data
document.querySelector('#frmTodo').addEventListener('submit', function (e) {
    e.preventDefault();
    const value = e.target.elements.iptTodo.value;
    if (!isExist(todos, value) && !isNullOrWhitespace(value)) {
        todos.push({
            id: uuidv4(),
            text: e.target.elements.iptTodo.value,
            completed: false
        })
        saveTodos(todos);
    }
    renderTodos(todos, filters);
    e.target.elements.iptTodo.value = '';
})


