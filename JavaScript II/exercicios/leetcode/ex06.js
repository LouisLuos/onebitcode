const arr = [1, 2, 3, 4, 5]


function verificarNumero (array) {
    let numeroExiste = parseInt(prompt("Digita um número"))
    for (let i = 0; i < array.length; i++) {
        if (numeroExiste == array[i]) {
            return true
        } 
    }
    return false
}

console.log(verificarNumero(arr))