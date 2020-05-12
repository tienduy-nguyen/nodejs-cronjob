let parent = document.querySelector('.parent');
// console.log(parent);
let childs = parent.childNodes;
// console.log(childs);
let child1 = document.querySelector('ul li');
let child11 = document.querySelectorAll('ul ul li');
let child111 = document.querySelectorAll('ul ul ul li');
// console.log(child1);
// console.log(child11);
// console.log(child111);
// console.log(parent.innerHTML)
// console.log(parent.textContent)


// console.log(parent.className);
// console.log(parent.classList);

let div = document.createElement('div');
div.classList.add('container');
let span = document.createElement('span');
let text = document.createTextNode('Text node');
div.appendChild(text);
div.appendChild(span);
document.body.appendChild(div);

let div2 = document.createElement('div');
let a = document.createElement('a');
let button = document.createElement('button');
let input = document.createElement('input');
btnText = document.createTextNode('Button');
button.appendChild(btnText)
a.setAttribute('href','#')
div2.appendChild(a);
div2.appendChild(button);
div2.appendChild(input);
a.classList.add('href')
div2.classList.add('app');
document.body.insertBefore(div2, div);
// document.body.replaceChild(a,div2)


//Change Css style properties

parent.style.backgroundColor = 'red';


//Event listeners
//Mouse events
button.addEventListener('click', ()=>{
    console.log('Event click');
});
button.addEventListener('mousedown',()=>{
    console.log('Event mousedown')
})
button.addEventListener('mouseenter',()=>{
    console.log('Event mouseenter')
})
button.addEventListener('mouseup',()=>{
    console.log('Event mouseup')
})
button.addEventListener('mouseleave',()=>{
    console.log('Event mouseleave')
})
button.addEventListener('mouseover',()=>{
    console.log('Event mouseover')
})


//Key event
// input.addEventListener('keypress',(event)=>{
//     console.log('Keypress', event)
// })
input.addEventListener('input',(value)=>{
    console.log('Onchange', value.target.value)
})

//Propagation
parent.addEventListener('click', (event)=>{
    console.log('CLick',event.target)
})
child1.addEventListener('click', (event)=>{
    event.stopPropagation();
    console.log('CLick',event.target)
})