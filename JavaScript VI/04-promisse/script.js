// pedente - pedding
// resolvid - resolved
// rejeitada - reject

function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada.')
        setTimeout(() => {
            console.log('Resolvendo a promise...')
            resolve('tramb')
        }, 3 * 1000)
    })
}

const p = execute()

console.log(p)

setTimeout(() => {
    console.log(p)
}, 5 * 1000)