const produto = {
  id: 1,
  nome: 'Laptop',
  preco: 4500,
  categoria: 'Eletrônicos'
};

const { id, ...detalhes} = produto

console.log(id)
console.log(detalhes)

// console.log(id);        // Saída: 1
// console.log(detalhes);  // Saída: { nome: 'Laptop', preco: 4500, categoria: 'Eletrônicos' }