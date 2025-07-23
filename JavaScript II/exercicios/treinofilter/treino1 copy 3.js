const palavras = ['casa', 'carro', 'bicicleta', 'sol', 'computador', 'livro']

const palavrasLongas = palavras.filter(function(index){
    if (index.length - 1 >= 5) {
        return index
        
    }
})

console.log(palavrasLongas)