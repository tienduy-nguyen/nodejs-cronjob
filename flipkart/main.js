document.addEventListener('DOMContentLoaded', ()=>{
    let aImgs = document.querySelectorAll('.thumb a');
    console.log(aImgs)
    aImgs.forEach(element => {
        mouseOverImg(element);
    });
})

mouseOverImg = (element) =>{
    element.addEventListener('click',(event) =>{
        event.preventDefault();
        let imgShow = document.querySelector('.imgBox img');
        console.log(imgShow)
        imgShow.setAttribute('src',element.getAttribute('href'));
    })
}