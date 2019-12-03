document.querySelector('button').addEventListener('click',function(e) {
    console.log('did this work?');
    console.log(e);
    e.target.textContent = 'The button was clicked';
});