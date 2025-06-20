const usuario = {
  id: 101,
  nome: 'Carlos',
  endereco: {
    rua: 'Rua das Flores',
    cidade: 'Curitiba'
  }
};

const { endereco } = usuario

const { rua, cidade} = endereco

console.log(rua)
console.log(cidade)

// console.log(rua);     // Saída: Rua das Flores
// console.log(cidade);  // Saída: Curitiba