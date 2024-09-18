const code = document.getElementById("code")
const key = document.getElementById("keycodes")
const press = document.getElementById("keyPress")

document.addEventListener("keydown", (event)=>{
code.textContent = event.code
key.textContent = event.key
press.textContent = event.keyCode

})
