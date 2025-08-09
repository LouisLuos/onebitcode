console.log("pense em um número, você tem 5 segundos pra advinhar, (número de 1 a 5)")

setTimeout(() => {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}, 1000 * 2)


let num = 0
const idInterval = setInterval(() => {
    
    num += 1
    console.log(`Se passaram ${num} segundos`)

    if (num === 10) {
        clearInterval(idInterval)
    }
}, 1000 * 1)