function buttonScriptBlog() {
    if (window.innerWidth < 610) {
        document.getElementById("links-blog").innerHTML = `
                            <a class="btn git" target="blank" href="https://github.com/makosdDavid/simpleLifeBlog">
                                <i class="fa-brands fa-github fa-x"></i>
                            </a>
                            <a class="btn page" target="blank" href="https://mdgd-simplelife.netlify.app/">
                                <i class="fa-solid fa-file-lines"></i>
                            </a>`
    } else {
        document.getElementById("links-blog").innerHTML = `
                            <a class="btn git" target="blank" href="https://github.com/makosdDavid/simpleLifeBlog">
                           View code here
                            <span class="space"></span>
                            <i class="fa-brands fa-github fa-x"></i>
                            </a>
                            <a class="btn page" target="blank" href="https://mdgd-simplelife.netlify.app/">
                            View page
                            <span class="space"></span>
                            <i class="fa-solid fa-file-lines"></i>
                            </a>`
    }
}

export { buttonScriptBlog }