console.log('Script Working');
const header = document.querySelector("header");
// console.log(header)
window.addEventListener('scroll',()=>{
    if(window.scrollY > 50){
        header.style.height = "75" + "px"
    }else{
        header.style.height = "100" + "px";
    }
    // console.log(window.scrollY)
    
})

//responsive menu
const menuIcon = document.querySelector(".menuIcon");
const mobileMenu = document.querySelector('.mobileMenu')
const lines = document.querySelectorAll('.line')
// console.log(lines)

menuIcon.addEventListener('click',(e)=>{
    e.preventDefault();
    mobileMenu.classList.toggle('top-75')
    lines.forEach(line => {
        // console.log(lines)
        line.classList.toggle('close')
    })
    // console.log(header.offsetHeight)
})


//active class
const sections = document.querySelectorAll('section')
const navigation = document.querySelectorAll("nav a")
const mobileNavigation = document.querySelectorAll('.mobileMenu a')
mobileNavigation.forEach(li=>{
    li.addEventListener('click',()=>{
        mobileMenu.classList.remove('top-75')
        lines.forEach(line=>{
            line.classList.remove('close')
        })
    })
})
window.addEventListener('scroll',()=>{
    let current = '';
    sections.forEach(section=>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 3)){
            current = section.getAttribute('id');
        }
    })
    // console.log(current)
    navigation.forEach(li=>{
        
        li.classList.remove('active');
        if(li.classList.contains(current)){
            // console.log(li)
            li.classList.add('active')
        }
    })
    mobileNavigation.forEach(li=>{
        
        li.classList.remove('active');
        if(li.classList.contains(current)){
            // console.log(li)
            li.classList.add('active')
        }
    })
})
// console.log(sections)
// console.log(navigation)

//donation Popup
const makeDonation = document.querySelector('.makeDonation');
const popup = document.querySelector('.popup');
const donationClose = document.querySelector('.donationClose')

makeDonation.addEventListener('click',(e)=>{
    e.preventDefault();
    popup.classList.add('open')
})
donationClose.addEventListener('click',()=>{
    popup.classList.remove('open')
})