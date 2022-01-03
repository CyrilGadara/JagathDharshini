console.log('Script Working');
const header = document.querySelector("header");
console.log(header)
window.addEventListener('scroll',()=>{
    if(window.scrollY > 50){
        header.style.height = "75" + "px"
    }else{
        header.style.height = "100" + "px";
    }
    console.log(window.scrollY)
    
})

//responsive menu
const menuIcon = document.querySelector(".menuIcon");
const mobileMenu = document.querySelector('.mobileMenu')
const lines = document.querySelectorAll('.line')
console.log(lines)

menuIcon.addEventListener('click',(e)=>{
    e.preventDefault();
    mobileMenu.classList.toggle('top-75')
    lines.forEach(line => {
        console.log(lines)
        line.classList.toggle('close')
    })
    console.log(header.offsetHeight)
})