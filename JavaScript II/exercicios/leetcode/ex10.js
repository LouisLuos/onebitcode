const arr = [1, 2, 2, 3, 4, 4, 5]


function removerDuplicados (array) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[i + 1]) {
            newArray.push(array[i])
        } 
    }
    console.log(newArray)
}

removerDuplicados(arr)