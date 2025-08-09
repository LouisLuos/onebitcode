function calculoImc (altura, peso) {
    return new Promise((resolved, rejectd) => {
        if (isNaN(altura) || isNaN(peso)) {
            rejectd("Ambos os valores tem que ser números.")
        }

        const imc = peso / (altura * altura)
        resolved(imc)
    })
}

function calculoPessoa (func) {
    return new Promise ((reseolved) => {
        if (func < 18.5) {
            reseolved(`Você está magro seu indíce IMC é: ${func}`)
        }
        if (func >= 18.5 & func <= 24.9) {
            reseolved(`Você está normal seu indíce IMC é: ${func}`)
        }
        if (func >= 25 & func <= 29.9 ) {
            reseolved(`Você está com sobrepeso seu indíce IMC é: ${func}`)
        }
        if (func >= 30 & func < 80) {
            reseolved(`Você está obeso seu indíce IMC é: ${func}`)
        }
        if (func >= 80) {
            reseolved(`Você se tornou um dinossauro, parabéns! Seu indíce IMC é: ${func}`)
        }
    })
}


calculoImc(1.63, 230).then((resultado) => {
    calculoPessoa(resultado).then((log) => {
        console.log(log)
    })
}).catch((error) => {
    console.log("Ocorreu um erro inesperado: " + error)
}).finally(() => {
    console.log("Programa finalizado :) ")
})

