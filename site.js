document.addEventListener("DOMContentLoaded", () => {
   
const intro = document.querySelector('.intro-section')
const body = document.querySelector('body')
const projects = document.querySelector('.projects')


const introOptions = {
    threshold: .80,
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

const projectsOption = {
    threshold: .90,
    rootMargin: "40px 0px 0px 0px"
};

const projectsObserver = new IntersectionObserver(function(entries, projectsObserver){
    entries.forEach( entry => {
        if( entry.isIntersecting){
            body.classList.add("projects-scrolled")
        } else {
            body.classList.remove("projects-scrolled")
        }
    })
}, projectsOption)

projectsObserver.observe(projects)


})

