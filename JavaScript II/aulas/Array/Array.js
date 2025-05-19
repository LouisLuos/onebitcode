const lista = ["Luiz", "Jonas", "Kevin"]
const copia = [...lista]

const todos = copia.push("Luiz")

console.log(lista)
console.log(copia)
console.log(todos)







//Adicionando elementos:
// push: Adiciona um elemento no final do array e devolve o novo tamanho do array
// unshift: Adiciona um elemento no começo do array e devolve o novo tamanho do array


//Removendo elementos:
// pop: Remove um elemento no final do array e devolve o elemento removido
// shift: Remove um elemento no começo do array e devolve o elemento removido


//Pesquisando por um elemento:
// includes: Verifica se um certo elemento está presente no array 
// indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array


//Cortando e concatenando:
// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original. Também pode ser usado com números negativos referenciar o final do array
// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)


//Substituindo elementos:
// splice: Permite remover elementos em qualquer posição do array e substituir por novos


//Interando sobre elementos:
// Usando o for para percorrer cada elemento do array :

//for (let indice = 0; indice < sociedade.length; indice++) {
//  const elemento = sociedade[indice]
//  console.log(elemento + " se encontra na posição " + indice)