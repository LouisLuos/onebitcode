class Account {
    #password
    #balance = 1500
    constructor (user) {
        this.email = user.email
        this.#password = user.password  
    }
    getBalance(email, password) {
        if (this.#autenticacao(email, password) === true) {
            return this.#balance
        } else {
            return null
        }
    }
    #autenticacao(email, password) {
        return email === this.email && password === this.#password
    }
}

class User {
    constructor (email, password) {
        this.email = email
        this.password = password
    }
}

const user = new User ("luiz@gmail.com", 12345)

const account = new Account (user)


console.log(account.getBalance("luiz@gmail.com", 12345))

