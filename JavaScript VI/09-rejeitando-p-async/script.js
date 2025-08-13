async function asyncSum(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return Promise.reject("Rejeitado")
    }
    return a + b
}

function asyncSubtract(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return Promise.reject("Rejeitado") 
    }
    return a - b
}

const sumResult = asyncSum(10, 20)
const subResult = asyncSubtract(3, "null")
Promise.all([sumResult, subResult]).then((results) => console.log(results)).catch((error) => console.log(error))
