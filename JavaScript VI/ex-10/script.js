function calcularImc(peso, altura) {
    console.log("Calculando IMC...");
    return new Promise((resolved, reject) => {
        setTimeout(() => {
        const imcPessoa = peso / (altura * altura)
        if(typeof imcPessoa === "number"){
            resolved(imcPessoa)
        } else {
            reject("O resultado não foi um número")
        }
    }, 1000 * 2)
    })
}

function exibirImc(peso, altura) {
    // Para acessar o valor de calcularImc, precisamos usar o .then()
    return new Promise((res, rej) => {
        calcularImc(peso, altura).then((imc) => {
            // Agora 'imc' é o número real, não uma Promise
            if (imc < 18.5) {
                res(`Abaixo: ${imc.toFixed(2)}`);
            } else if (imc < 24.9) {
                res(`Normal : ${imc.toFixed(2)}`);
            } else if (imc < 29.9) {
                res(`Sobrepeso : ${imc.toFixed(2)}`);
            } else if (imc < 39.9) {
                res(`Obesidade : ${imc.toFixed(2)}`);
            } else {    
                res(`Obesidade grave : ${imc.toFixed(2)}`);
            }
        }).catch((err) => rej(err)); // Repassa o erro se falhar
    });
}



console.log("Mostrando o funcionamento assincrono")
exibirImc(72, 1.62).then((result) => {
    console.log(result)
})
