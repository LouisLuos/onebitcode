const numeros = [10, 20, 30, 40, 50];

const total = numeros.reduce((acmulutador, value) => acmulutador += value, 0)
console.log(total)