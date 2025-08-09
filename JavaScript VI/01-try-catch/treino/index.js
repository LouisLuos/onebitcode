function insiraNumero () {
    try {
        const num = parseFloat(prompt("Escreva um número"))

        if (isNaN(num)) {
            throw new Error("Não foi digitado um número")
        }

        return num

    } catch (error) {
        console.log(error.message)
    } finally {
        console.log("escerrando programa")
    }
}

console.log(insiraNumero())