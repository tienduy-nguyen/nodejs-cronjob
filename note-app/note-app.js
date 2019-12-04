'use strict'

let notes = getSavedNotes();
const filters = {
    searchText: ''
}
renderNotes(notes, filters);
document.querySelector('#btnCreateNote').addEventListener('click', function (e) {
    const id = uuidv4();
   try {
    notes.push({
        id: id,
        title: '',
        body: ''
    });
   } catch (e) {
   }
    
    saveNotes(notes);
    location.assign(`/note-app/edit.html#${id}`);
});

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value);
});

//localStorage: using to store data when the page reloaded
// localStorage.setItem('location', 'Philadelphia');
//How can read data previously saved
// console.log(localStorage.getItem('location'));
// localStorage.removeItem('location');

// localStorage.clear();

// const user = {
//     name: 'TienDuy',
//     age:'26'
// }
// console.log(user);

// const userJSON  = JSON.stringify(user);
// console.log(userJSON);:
// localStorage.setItem('user',user)
// localStorage.setItem('userJSON',userJSON);


// const userJSON  = localStorage.getItem('userJSON');
// const user = JSON.parse(userJSON);
// console.log(userJSON);
// console.log(user);
// console.log(`${user.name} is ${user.age}`)


//Check for existing save data
// notes.filter(function(note, index){
//     if(note.title.length ===0){
//         notes.splice(index,1);
//     }
// })