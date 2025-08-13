async function asyncSum(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return Promise.reject("Rejeitado")
    }
    return a + b
}

async function nome() {
    try {
        const soma = await(asyncSum(10, "a"))
        console.log(soma) 
    } catch (error) {
        console.log(error)
    }
}

nome()