'use strict'

//Read existing notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes');
    // debugger
    if(notesJSON === undefined || notesJSON == null || notesJSON =='null') return [];
    try{    
        return JSON.parse(notesJSON);
    } catch (e) {
        return [];
    }
}

//Generate the DOM structure for a note 
const generateNoteDOM = function(note){
    const noteEl = document.createElement('div');
    const textEl = document.createElement('a');
    const button = document.createElement('button');

    //Setup the remove button
    button.textContent = 'x';
    noteEl.appendChild(button);
    button.addEventListener('click',function(){
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes,filters)
    })

    //Setup the note title text
        if(!isNullOrWhitespace(note.title)){
            textEl.textContent = note.title;
        } else{
            textEl.textContent = 'Unnamed note';
        }
        textEl.setAttribute('href',`/note-app/edit.html#${note.id}`);
        noteEl.appendChild(textEl);
	return noteEl;
}

//Save note to localStorage
const saveNotes = function(notes){
	localStorage.setItem('notes', JSON.stringify(notes));
}

//Remove note from the list
const removeNote = function(id){
    const noteIndex = notes.findIndex(function(note){
        return note.id === id;
    });
    if(noteIndex > -1){
        notes.splice(noteIndex,1);
    }

}

//Render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes;
    try{
        filteredNotes = notes.filter(function (note) {
            return isNullOrWhitespace(note.title) || note.title.toLowerCase().includes(filters.searchText.toLowerCase());
        });
    } catch (e){
        // console.log('notes is null or undefined');
    }
    
    document.getElementById('notes').innerHTML = '';//Delete all node in div #notes
    //Create a new note matching with the input text
    if (filteredNotes !== undefined && filteredNotes != null && filteredNotes !== ''){
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