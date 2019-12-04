'use strict'

//Read existing notes from localStorage
const getSaveChoiceSort = () => {
    const choice = JSON.parse(localStorage.getItem('sort'));
    if (choice != 'byEdited' && choice != 'byCreated' && choice != 'alphabetical') return 'byEdited';
    return choice;
}
const saveChoiceSort = function (choice) {
    localStorage.setItem('sort', JSON.stringify(choice));
}


const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes');
    // debugger
    if (notesJSON === undefined || notesJSON == null || notesJSON == 'null') return [];
    try {
        return JSON.parse(notesJSON);
    } catch (e) {
        return [];
    }
}

//Generate the DOM structure for a note 
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('div');
    const textEl = document.createElement('a');
    const button = document.createElement('button');

    //Setup the remove button
    button.textContent = 'x';
    noteEl.appendChild(button);
    button.addEventListener('click', function () {
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes, filters)
    })

    //Setup the note title text
    if (!isNullOrWhitespace(note.title)) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'Unnamed note';
    }
    textEl.setAttribute('href', `/note-app/edit.html#${note.id}`);
    noteEl.appendChild(textEl);
    return noteEl;
}

//Save note to localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

//Remove note from the list
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id;
    });
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1);
    }

}

//Sort your note by one of three way
const sortNotes = function (notes, sortBy) {
    if(sortBy === 'byEdited'){
        return notes.sort(function(a,b){
            if(a.updateAt > b.updateAt){
                return -1;
            } else if(a.updateAt < b.updateAt){
                return 1;
            } else {
                return 0;
            }
        })
    } else if(sortBy === 'byCreated'){
        return notes.sort(function(a,b){
            if(a.createAt > b.createAt){
                return -1;
            } else if(a.createAt < b.createAt){
                return 1;
            } else return 0;
        })
    } else if(sortBy === 'alphabetical'){
        return notes.sort(function(a,b){
            if(a.title.toLowerCase() < a.title.toLowerCase()){
                return -1;
            } else if(a.title.toLowerCase() > a.title.toLowerCase()){
                return 1;
            } else return 0;
        })
    } else {
        return notes;
    }
}

//Render application notes
const renderNotes = function (notes, filters) {
    notes = sortNotes(notes, filters.sortBy);
    // debugger
    const filteredNotes = notes.filter(function (note) {
        return isNullOrWhitespace(note.title) || note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    document.getElementById('notes').innerHTML = '';//Delete all node in div #notes
    //Create a new note matching with the input text
    if (filteredNotes !== undefined && filteredNotes != null && filteredNotes !== '') {
        filteredNotes.forEach(function (note) {
            const noteEl = generateNoteDOM(note);
            document.querySelector('#notes').appendChild(noteEl);
        });
    }

};

//Check if string is null or whitespace like in C#
function isNullOrWhitespace(input) {
    if (typeof input === 'undefined' || input == null) return true;
    return input.replace(/\s/g, '').length < 1;
}

// localStorage.clear()


//Generate the last edited message
const generateLastEdited = function (timestamp) {
    return `Last edited ${moment(timestamp).fromNow()}`;
}