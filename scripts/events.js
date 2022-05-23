import { logoOnScreen } from '../scripts/logo-script.js'
import { buttonScriptBlog } from '../scripts/button-script-blog.js'
import { buttonScriptDashboard } from '../scripts/button-script-dashboard.js'
import { buttonScriptWizard } from '../scripts/button-script-wizard.js'

function logoEvent() {
    document.defaultView.addEventListener("resize", logoOnScreen)
    document.addEventListener("fullscreen", logoOnScreen)
    window.addEventListener('load', logoOnScreen)
}

function blogEvent() {
    document.defaultView.addEventListener("resize", buttonScriptBlog)
    document.addEventListener("fullscreen", buttonScriptBlog)
    window.addEventListener('load', buttonScriptBlog)
}

function dashboardEvent() {
    document.defaultView.addEventListener("resize", buttonScriptDashboard)
    document.addEventListener("fullscreen", buttonScriptDashboard)
    window.addEventListener('load', buttonScriptDashboard)
}

function wizardEvent() {
    document.defaultView.addEventListener("resize", buttonScriptWizard)
    document.addEventListener("fullscreen", buttonScriptWizard)
    window.addEventListener('load', buttonScriptWizard)
}

export { logoEvent, blogEvent, dashboardEvent, wizardEvent }