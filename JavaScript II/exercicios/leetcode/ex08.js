const arr = [-2, 5, 0, -8, 10, 3, 4, 5]

function filtrarPositivos (array) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            newArray.push(array[i])
        }
    }
    console.log(newArray)
}

filtrarPositivos(arr)