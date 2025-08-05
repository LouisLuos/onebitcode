const button = document.getElementById("register-button")

function dados (ev) {
    console.log(ev.type)
    console.log(ev.currentTarget.parentNode.children.username.value)
    console.log(ev.currentTarget.parentNode.children.password.value)
    console.log(ev.currentTarget.parentNode.children.passwordConfirmation.value)
}

button.addEventListener("click", dados) 


const buttonRemove = document.getElementById("register-remove")


buttonRemove.addEventListener("click", () => {
    button.removeEventListener("click", dados)
})
