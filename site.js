document.addEventListener("DOMContentLoaded", () => {
    const navBar = document.createElement('div')
    navBar.classList += "navBar"
    const alex = document.querySelector('h1 span')
    console.log(alex)

    // navBar.innerHTML = `
    //     <div class="home">Home</div>
    //     <div class="projects">Projects</div>
    //     <div class="contact">Contact</div>
    // `

    const body = document.querySelector('body')
    body.prepend(navBar)

    const titleDiv = document.createElement('div')
    titleDiv.className = "title"

    const contentDiv = document.querySelector(".content")
    // console.log(contentDiv)

    navBar.addEventListener("click", (e)=>{
        
        if (e.target.className === "home"){
            console.log("clicked home")
            contentDiv.innerHTML = `
            <h1 class="title">Alexandra Ortiz</h1>
            <p>hello, my name is Alex.</p>
            <p>I am a web developer pursuing a passion to build beutiful things.</p>
            `
        }if (e.target.className === "projects"){
            console.log("clicked projects")
            contentDiv.innerHTML = ''

        }if (e.target.className === "contact"){
            console.log("clicked contact")
            contentDiv.innerHTML = ''
        }
    })
})

