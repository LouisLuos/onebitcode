const arr1 = [52, 30, 40, 2, 10]
const arr2 = [3, 4, 20, 33, 44]

function juntarArray (array1, array2) {
    const novoArray = []

    for (let i = 0; i < array1.length; i++) {
        novoArray.push(array1[i])
    }

    for (let i = 0; i < array2.length; i++) {
        novoArray.push(array2[i])
    }

    console.log(novoArray)
}

juntarArray(arr1, arr2)