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

let findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
    return `Body of \'${noteTitle}\' is ${notes[index].body}`;
};

let note = findNote(notes, 'Office modification');
console.log(`note = ${note}`);

let index = notes.findIndex(function (note, index) {
    return note.title.toLowerCase() === 'Office modification'.toLowerCase();

})
console.log(`index = ${index}`);

let findNote2 = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
};

let note2 = findNote2(notes,'Habbits to work on');
console.log(note2);
console.log(notes);