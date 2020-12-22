document.addEventListener("DOMContentLoaded", () => {
    const navBar = document.createElement('div')
    navBar.classList += "navBar"
    navBar.innerHTML = `
        <div>Home</div>
        <div>Projects</div>
        <div>Contact</div>
    `
    const body = document.querySelector('body')
    
    body.prepend(navBar)
})

