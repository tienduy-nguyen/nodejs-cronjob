'use strict'

//Read existing notes from localStorage
const getSaveTodos = function () {
	const todosJSON = localStorage.getItem('todos');
	if(todosJSON === undefined || todosJSON == null || todosJSON =='null') return [];
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

//Remove todo by Id
const removeTodo = function(id){
	
	const todoIndex = todos.findIndex(function(todo){
		return todo.id === id;
	})
	if(todoIndex > -1){
		todos.splice(todoIndex,1);
	}
}

//Toggle the completed value for a given todo
const toggleTodo = function(id){
	const todo = todos.find(function(todo){
		return todo.id === id;
	})
	if(todo !== undefined){
		todo.completed = !todo.completed;
	}
}

//Delete all complete
const deleteCompletedTodos = function(todos){
	for(let i = todos.length-1;i>=0;--i){
		if(todos[i].completed){
			todos.splice(i,1);
		}
	}
	saveTodos(todos);
	renderTodos(todos,filters);
}

//Render application todos based on filters
const renderTodos = function (todos, filters) {
		const filteredTodos = todos.filter(function (todo) {
			const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
			const hideCompleteMatch = !filters.hideCompleted || !todo.completed;

			return searchTextMatch && hideCompleteMatch;
		});
	// debugger
		const incompleteTodos = filteredTodos.filter(function (todo) {
			return !todo.completed;
		});
	
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
	checkbox.checked = todo.completed;
	todoEl.appendChild(checkbox);
	checkbox.addEventListener('change',function(){
		toggleTodo(todo.id);
		saveTodos(todos);
		renderTodos(todos,filters);
	})
	//Setup the todo text
	todoText.textContent = todo.text;
	todoEl.appendChild(todoText);
	
	//Setup the remove button
	removeButton.textContent = 'x';
	todoEl.appendChild(removeButton);
	removeButton.addEventListener('click',function(){
		removeTodo(todo.id);
		saveTodos(todos);
		renderTodos(todos,filters);
	})


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