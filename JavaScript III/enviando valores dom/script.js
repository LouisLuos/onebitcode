function register(elemento) {
    const username = elemento.children.username.value
    const password = elemento.children.password.value
    const passwordConfirmation = elemento.children.passwordConfirmation.value
    console.log({username, password, passwordConfirmation})
}