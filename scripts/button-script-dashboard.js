function buttonScriptDashboard() {
    if (window.innerWidth < 610) {
        document.getElementById("links-dashboard").innerHTML = `
                            <a class="btn git" target="blank" href="https://github.com/makosdDavid/chromeExtensionDashboard">
                                <i class="fa-brands fa-github fa-x"></i>
                            </a>
                            <a class="btn page" target="blank" href="https://mdgd-dashboard.netlify.app/">
                                <i class="fa-solid fa-file-lines"></i>
                            </a>`
    } else {
        document.getElementById("links-dashboard").innerHTML = `
                            <a class="btn git" target="blank" href="https://github.com/makosdDavid/chromeExtensionDashboard">
                            View code here
                            <span class="space"></span>
                            <i class="fa-brands fa-github fa-x"></i>
                            </a>
                            <a class="btn page" target="blank" href="https://mdgd-dashboard.netlify.app/">
                            View page
                            <span class="space"></span>
                            <i class="fa-solid fa-file-lines"></i>
                            </a>`

    }
}

export { buttonScriptDashboard }