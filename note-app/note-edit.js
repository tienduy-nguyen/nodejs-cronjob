'use strict'

const titleEle = document.querySelector('#note-title');
const bodyEle = document.querySelector('#note-body');
const removeEle = document.querySelector('#removeNote');
const dateElement = document.querySelector('#last-edited');

//Get hash id added in the edit page
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(function(n){
	return n.id === noteId;
});
if(note === undefined){
	location.assign('/note-app/index.html');
}

titleEle.value = note.title;
bodyEle.value = note.body;
dateElement.textContent = `Last edited ${moment(note.updateAt).fromNow()}`;

//Change the title and body of note when input change
titleEle.addEventListener('input',function(e){
	note.title = e.target.value;
	note.updateAt = moment().valueOf();
	dateElement.textContent = generateLastEdited(note.updateAt);
	saveNotes(notes);
})

bodyEle.addEventListener('input',function(e){
	note.body = e.target.value;
	note.updateAt = moment().valueOf();
	dateElement.textContent = generateLastEdited(note.updateAt);
	saveNotes(notes);
})

//Back to the home page
removeEle .addEventListener('click',function(){
	removeNote(note.id);
	saveNotes(notes);
	location.assign('/note-app/index.html');
})

//Syncing data across pages
window.addEventListener('storage',function(e){
	if(e.key === 'notes'){
		notes = JSON.parse(e.newValue)
		let note = notes.find(function(n){
			return n.id === noteId;
		});
		if(note === undefined){
			location.assign('/note-app/index.html');
		}
		titleEle.value = note.title;
		bodyEle.value = note.body;
		dateElement.textContent = generateLastEdited(note.updateAt);
	}
	
})

// document.querySelector('#frmEdit').addEventListener('submit', function (e) {
// 	e.preventDefault();
// 	saveNotes(notes);
// 	location.assign('/note-app/index.html')
// })
