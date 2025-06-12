function gerarArray () {
    let num = parseInt(prompt("Digite um número"))
    const array = []
    for (let i = 0; num > array.length; i++) { 
        array.push(i + 1)
    }
    console.log(array)
}

gerarArray()

