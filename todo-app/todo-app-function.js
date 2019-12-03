'use strict'

//Read existing notes from localStorage
const getSaveTodos = function () {
	const todosJSON = localStorage.getItem('todos');
	if(todosJSON === undefined || todosJSON == null){
		return [];
	}
	try{
		return JSON.parse(todosJSON);
	} catch(e){
		return [];
	}
};

//Save todos to localStorage
const saveTodos = function (todos) {
	localStorage.setItem('todos', JSON.stringify(todos));
}

//Render application todos based on filters
const renderTodos = function (todos, filters, isHideCompleted) {
	const filteredTodos = todos;
	try {
		filteredTodos = todos.filter(function (todo) {
			return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
		});
	} catch (e) {
	}
	
	if (isHideCompleted) {
		for (var i = filteredTodos.length - 1; i >= 0; --i) {
			if (filteredTodos[i].completed) {
				filteredTodos.splice(i, 1);
			}
		}
	}

	// debugger
	const incompleteTodos = [];
	try {
		incompleteTodos = filteredTodos.filter(function (todo) {
			return !todo.completed;
		});
	} catch (e) {
	}
	
	document.querySelector('#divTodoList').innerHTML = '';
	const summary = generateSummaryDOM(incompleteTodos);
	document.querySelector('#divTodoList').appendChild(summary);

	if(filteredTodos !== undefined && filteredTodos !=null && filteredTodos !=''){
		filteredTodos.forEach(function (todo) {
			document.querySelector('#divTodoList').appendChild(generateTodoDOM(todo));
		});
	}
}


//Get the DOM elements for an individual note
const generateTodoDOM = function (todo){
	const todoEl = document.createElement('div');
	const checkbox = document.createElement('input');
	const todoText = document.createElement('span');
	const removeButton = document.createElement('button');

	//Set up the todo checkbox
	checkbox.setAttribute('type', 'checkbox');
	todoEl.appendChild(checkbox);

	//Setup the todo text
	todoText.textContent = todo.text;
	todoEl.appendChild(todoText);

	//Setup the remove button
	removeButton.textContent = 'x';
	todoEl.appendChild(removeButton);
	
	return todoEl;
}


//Get the DOM elements for list summary
const generateSummaryDOM = function(incompleteTodos){
	const summary = document.createElement('h2');
	summary.textContent = `You have ${incompleteTodos.length} todo left`;
	return summary;
}

function isNullOrWhitespace( input ) {

    if (typeof input === 'undefined' || input == null) return true;

    return input.replace(/\s/g, '').length < 1;
}


//Check if todos exist a text
const isExist = function (todos, newText) {
	if (todos === undefined || todos == null) { return false }
	if(todos.length <1) return false;
	if(isNullOrWhitespace(newText)) return true;
    const count = todos.length;
    for (let i = 0; i < count; ++i) {
        const flag = isEqual(todos[i].text, newText);
        if (flag)
            return true;
    }
    return false;
}
//flag contains text
const isEqual = function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase()) === 0;
}
// localStorage.clear()