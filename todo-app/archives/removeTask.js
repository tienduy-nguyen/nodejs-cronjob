//DOM: Document object model
//Remove element from DOM
const ps = document.querySelectorAll('p');
let len = ps.length;
for(let i=0; i < len; ++i){
    if(ps[i].textContent.includes('with')){
        ps[i].remove();
    };
};

//add a new element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new element from Javascript';
document.querySelector('body').appendChild(newParagraph);


