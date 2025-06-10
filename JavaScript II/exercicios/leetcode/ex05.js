const arr = [1, 2, 3, 4, 10, 20, 35]

function inverterArray (array) {
    let arrayInverso = []
    for (i = array.length - 1; i >= 0; i--) {
        arrayInverso.push(array[i])
    }
    console.log(arrayInverso)
}

inverterArray(arr)