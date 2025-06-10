const arr = [1, 10, 2, 4, 5, 6, 1, 11, 13]

function mediaArray (array) {
    let valorFinal = 0
    for (i = 0; i < array.length; i++) {
        valorAtual = array[i]
        valorFinal += valorAtual
    }
    console.log(valorFinal / array.length)
}


mediaArray(arr)