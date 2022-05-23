function logoOnScreen() {
    if (window.innerWidth > 1100) {
        document.getElementById("logo").innerHTML = ``
        document.getElementById("logo-here").innerHTML = `<img src="./assets/img/profile/MDGD logo colored.bmp" alt="logo">`
    } else if (window.innerWidth < 1100) {
        document.getElementById("logo").innerHTML = `<img src="./assets/img/profile/MDGD logo colored.bmp" alt="logo">`
        document.getElementById("logo-here").innerHTML = ``
    } else {
        document.getElementById("logo").innerHTML = ``
        document.getElementById("logo-here").innerHTML = `<img src="./assets/img/profile/MDGD logo colored.bmp" alt="logo">`
    }
}

export { logoOnScreen }