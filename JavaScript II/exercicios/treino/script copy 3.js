const produtos = [{ nome: 'Camiseta', preco: 80 }, { nome: 'Calça Jeans', preco: 220 }, { nome: 'Tênis', preco: 350 }];

const produtosDesconto = produtos.map(function (objeto) {
    objeto.ComDesconto = objeto.preco * 0.9
    return objeto
})

console.log(produtosDesconto)