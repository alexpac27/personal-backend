document.addEventListener("DOMContentLoaded", () => {
    const navBar = document.createElement('div')
    navBar.classList += "navBar"
    navBar.innerHTML = `
        <div class="home">Home</div>
        <div class="projects">Projects</div>
        <div class="contact">Contact</div>
    `
    const body = document.querySelector('body')
    body.prepend(navBar)

    const titleDiv = document.createElement('div')
    titleDiv.className = "title"

    navBar.addEventListener("click", (e)=>{
        
        if (e.target.className === "home"){
            console.log("clicked home")
        }if (e.target.className === "projects"){
            console.log("clicked projects")
        }if (e.target.className === "contact"){
            console.log("clicked contact")
        }
    })
})

