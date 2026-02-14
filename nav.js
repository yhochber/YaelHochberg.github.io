const openNav = () => {
    const navView = document.getElementById("nav-view-mobile")
    if(navView.style.width == "100vw") {
        navView.style.width = "0vw"
    } else [
        navView.style.width = "100vw"
    ]
}
const buttons = document.querySelectorAll("#nav-btn-view")
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => {
        openNav()
    })
}

