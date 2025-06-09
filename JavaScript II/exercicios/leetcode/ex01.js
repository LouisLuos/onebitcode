const array = [1, 3, 7, 10, 2, 131, 100, 11]




function somaArray (array) {
    let resultadoSoma = 0
    for (i = 0; i < array.length; i++) {
        let valorAtual = array[i]
        resultadoSoma += valorAtual
    }
    return resultadoSoma
}

console.log(somaArray(array))