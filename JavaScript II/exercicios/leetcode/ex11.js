const arr = [5, 12, 8, 130, 44]

function primeiroMaior (array) { 
    const numero = parseInt(prompt("Digite um número"))

    for (let i = 0; 1 < array.length; i++) {
        if (numero < array[i]) {
            return array[i]
        }
    }
    
    return undefined

}

console.log(primeiroMaior(arr))