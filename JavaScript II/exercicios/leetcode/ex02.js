const arr = [1, 10, 5, 3, 15, 25]


function maiorNumero (array) {
    let maiorNumero = 0
    for (i = 0; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i]
        }
    }
    return maiorNumero
}

console.log(maiorNumero(arr))