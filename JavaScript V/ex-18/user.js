class User {
    constructor (fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, senha) {
        if (email === this.email & this.password === senha) {
            console.log("Login realizado com sucesso")
        }
        else {
            console.log("Email ou senha não conferem")
        }
    }
}

const usuario1 = new User("luiz henrique", "luizemail.com", 123)
console.log(usuario1)
usuario1.login("luizemail.com", 123)
