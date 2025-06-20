const produtos = [
  { id: 'p1', nome: 'Mouse' },
  { id: 'p2', nome: 'Teclado' },
  { id: 'p3', nome: 'Monitor' }
];

 for (const { nome, id} of produtos) {
    console.log(`Produto: ${nome}, ID: ${id}`)
 }
// Saída esperada:
// Produto: Mouse, ID: p1
// Produto: Teclado, ID: p2
// Produto: Monitor, ID: p3