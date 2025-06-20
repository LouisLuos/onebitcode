function obterCoordenadas() {
  return [10, 20];
}
console.log(obterCoordenadas)
const [ x ] = obterCoordenadas()
const [ , y] = obterCoordenadas()
console.log(x)
console.log(y)
// console.log(x); // Saída: 10
// console.log(y); // Saída: 20