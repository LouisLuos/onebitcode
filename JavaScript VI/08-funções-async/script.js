// async function asyncSum(a, b) {
//     return a + b
// }

// function asyncSubtract(a, b) {
//     return new Promise((resolve, reject) => {
//         if (typeof a !== 'number' || typeof b !== 'number') {
//             reject('arguments must be of type number')
//         } else {
//             resolve(a - b)
//         }
//     })
// }

// const sumResult = asyncSum(10, 20)
// const subResult = asyncSubtract(3, 5.5)
// Promise.all([sumResult, subResult]).then((results) => console.log(results)).catch((error) => console.log(error))

// asyncSum(10,30).then((result) => {
//     console.log(result)
// })

const numbers = [1, 6, 7, 8, 9, 8, null, 7, 5]

async function asyncSquare (num) {
    return num * num
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares =>  {
    console.log(squares)
}).catch((error) => console.log(error))