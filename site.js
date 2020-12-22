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
        console.log("click", e.target)
    })
})

