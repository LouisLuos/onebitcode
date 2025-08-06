const button = document.getElementById("register-button")
const buttonRemove = document.getElementById("register-remove")

function dados (ev) {
    const formNode = ev.currentTarget.parentNode;

  
  const username = formNode.querySelector('#username').value;
  const password = formNode.querySelector('#password').value;
  const passwordConfirmation = formNode.querySelector('#passwordConfirmation').value;

  console.log("Dados capturados:");
  console.log({ username, password, passwordConfirmation });
}

button.addEventListener("click", dados) 






buttonRemove.addEventListener("click", () => {
    button.removeEventListener ("click", dados)
    console.log("evento removido")
})
