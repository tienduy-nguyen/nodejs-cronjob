'use strict'

let notes = getSavedNotes();
const lastChoice = getSaveChoiceSort();
const dropdownSort = document.querySelector('#filter-by');

//Change the dropdown option
for(var i, j = 0; i = dropdownSort.options[j]; ++j) {
    if(i.value == lastChoice) {
        dropdownSort.selectedIndex = j;
        break;
    }
    if(j>2) break;
}

const filters = {
    searchText: '',
    sortBy: lastChoice
}
renderNotes(notes, filters);
document.querySelector('#btnCreateNote').addEventListener('click', function (e) {
    const id = uuidv4();
    const timestamp = moment().valueOf();
    console.log(timestamp);
   try {
    notes.push({
        id: id,
        title: '',
        body: '',
        createAt: timestamp,
        updateAt: timestamp
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

dropdownSort.addEventListener('change', function (e) {
    filters.sortBy = e.target.value;
    saveChoiceSort(e.target.value);
    renderNotes(notes,filters);

});

window.addEventListener('storage',function(e){
    if(e.key === 'notes'){
      notes = JSON.parse(e.newValue);
      renderNotes(notes, filters)  
    }
})

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