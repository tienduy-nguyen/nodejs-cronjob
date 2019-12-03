// document.querySelector('#btnRemoveClass').addEventListener('click',function(){
//     document.querySelectorAll('.some-class').forEach(function(note){
//         note.remove()}) ;
// });


const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];



const filters = {
    searchText: ''
}
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    document.getElementById('notes').innerHTML='';//Delete all node in div #notes

    //Create a new note matching with the input text
    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p');
        noteEl.textContent = note.title;
        document.querySelector('#notes').appendChild(noteEl);
    })
};

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})