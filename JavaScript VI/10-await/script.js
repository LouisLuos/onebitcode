async function asyncSum(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return Promise.reject("Rejeitado")
    }
    return a + b
}

async function nome() {
    const soma = await(asyncSum(10, 20))
    console.log(soma)
}

nome()