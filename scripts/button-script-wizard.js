function buttonScriptWizard() {
    if (window.innerWidth < 610) {
        document.getElementById("links-wizard").innerHTML = `
                            <a class="btn git" target="blank" href="https://github.com/makosdDavid/wizardGame">
                                <i class="fa-brands fa-github fa-x"></i>
                            </a>
                            <a class="btn page" target="blank" href="https://mdgd-wizargame.netlify.app/">
                                <i class="fa-solid fa-file-lines"></i>
                            </a>`
    } else {
        document.getElementById("links-wizard").innerHTML = `
                            <a class="btn git" target="blank" href="https://github.com/makosdDavid/wizardGame">
                            View code here
                            <span class="space"></span>
                            <i class="fa-brands fa-github fa-x"></i>
                            </a>
                            <a class="btn page" target="blank" href="https://mdgd-wizargame.netlify.app/">
                            View page
                            <span class="space"></span>
                            <i class="fa-solid fa-file-lines"></i>
                            </a>`

    }
}

export { buttonScriptWizard }