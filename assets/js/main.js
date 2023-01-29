
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


// show menu
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// menu hidden
//Validate if constant exists
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

//remove menu mob
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each navlink, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// here i added what to do after we scroll on website after a certain point

const scrollHeader = () =>{
    const header = document.getElementById('header')
   
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)




//cuz we all love themes so here it is dark-light theme
const themeButton = document.getElementById('theme-button')
console.log(themeButton)

themeButton.addEventListener("click",()=>{
document.body.classList.toggle("dark")
themeButton.classList.toggle("yellow")
})

    

