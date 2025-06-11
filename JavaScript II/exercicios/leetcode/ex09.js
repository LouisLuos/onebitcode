const arr = [1, 2, 3, 4, 5]

function dobrarNumero (array) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2)
    }
    console.log(newArray)
}

dobrarNumero(arr)