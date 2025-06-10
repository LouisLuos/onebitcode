const arr = [2, 4, 6, 7, 9, 4]

function contarPares (array) {
    numerosPares = 0
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            numerosPares++
        }
    }
    return numerosPares
}

console.log(contarPares(arr))