document.addEventListener("DOMContentLoaded", () => {
   
const intro = document.querySelector('.intro-section')
const body = document.querySelector('body')


const introOptions = {
    threshold: .90,
    rootMargin: "40px 0px 0px 0px"
};

const introObserver = new IntersectionObserver(function(entires, introObserver){
    entires.forEach( entry => {
        if( entry.isIntersecting) {
            body.classList.add("intro-scrolled")
        } else {
            body.classList.remove("intro-scrolled")
        }
    } )
}, introOptions); 

introObserver.observe(intro)
})

