const estoque = [{ nome: 'Monitor', qtd: 15 }, { nome: 'Webcam', qtd: 0 }, { nome: 'Mousepad', qtd: 25 }, { nome: 'HD Externo', qtd: 0 }];

const estoqueRestante = estoque.filter(function(index) {
    if (index.qtd > 0) {
        return index
    }
})

console.log(estoqueRestante)