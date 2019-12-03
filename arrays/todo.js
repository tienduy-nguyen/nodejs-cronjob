//1. Convert array to array of objects -> text, complete
//2. Create function to remove a todo by text value

const todos = [{
    text:'Order car food',
    complete: "false"
},{
    text: 'Clean kitchen',
    complete: 'true'
},{
    text : 'Buy food',
    complete: 'false'
},{
    text: 'Exercise',
    complete: 'false'
},{
    text: 'Become stronger',
    complete: 'false'
}]

//Clone a array
const todos1 = todos.map((x) => x);
// const todos1 = Array.from(todos);
// const todos1 = todos.concat();
// const todos1 = todos.concat([]);
// const todos1 = JSON.parse(JSON.stringify(todos));

console.log(todos1);

//Delete item in array
const deleteTodo = function(todos,todoText){
    const index = todos.findIndex(function(todo,index){
        return todo.text.toLowerCase() === todoText.toLowerCase();
    });
    if(index >-1){
        todos.splice(index,1);
    };
};

deleteTodo(todos1,'Buy food');
console.log(`Todo list after remove:`);
console.log(todos1);

//Filter methos
const filteredNotes = todos.filter(function(node,index){
    const isTextMatch = node.text.toLowerCase().includes('or');
    const isComplete = node.complete.toLowerCase().includes("tr");
    return isTextMatch && isComplete;
});
console.log('Return a value of filter method');
console.log(filteredNotes);

//using Query in array
const findNotes = function(notes,query){
    return notes.filter(function(node,index){
        const isTextMatch = node.text.toLowerCase().includes(query.toLowerCase());
        const isComplete = node.complete.toLowerCase().includes(query.toLowerCase());
        return isTextMatch || isComplete;
    });
};

console.log('Using the methode filter of array now');
console.log(findNotes(todos,'false'));
for (var member in todos) delete todos[member];
console.log(todos1);