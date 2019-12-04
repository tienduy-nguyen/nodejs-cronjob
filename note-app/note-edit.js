'use strict'

const titleEle = document.querySelector('#note-title');
const bodyEle = document.querySelector('#note-body');
const removeEle = document.querySelector('#removeNote');
//Get hash id added in the edit page
const noteId = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find(function(n){
	return n.id === noteId;
});
// if(note === undefined){
// 	location.assign('/note-app/index.html');
// }

titleEle.value = note.title;
bodyEle.value = note.body;

//Change the title and body of note when input change
titleEle.addEventListener('input',function(e){
	note.title = e.target.value;
	saveNotes(notes);
})

bodyEle.addEventListener('input',function(e){
	note.body = e.target.value;
	saveNotes(notes);
})

//Back to the home page
removeEle .addEventListener('click',function(){
	removeNote(note.id);
	saveNotes(notes);
	location.assign('/note-app/index.html');
})

// document.querySelector('#frmEdit').addEventListener('submit', function (e) {
// 	e.preventDefault();
// 	saveNotes(notes);
// 	location.assign('/note-app/index.html')
// })
