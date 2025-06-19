const pessoas = [
  { nome: 'Ana', idade: 25, cidade: 'São Paulo' },
  { nome: 'Bruno', idade: 30, cidade: 'Rio de Janeiro' },
  { nome: 'Carla', idade: 22, cidade: 'São Paulo' },
  { nome: 'Daniel', idade: 35, cidade: 'Belo Horizonte' },
  { nome: 'Elisa', idade: 22, cidade: 'Rio de Janeiro' }
]




const apenasNomes = pessoas.map((pessoa) => {
    return pessoa.nome
})

console.log(apenasNomes)


const novoObj = pessoas.map((pessoa) => {
    const status = pessoa.idade < 25 ? "jovem" : "adulto"
    return {
        nome: pessoa.nome,
        idade: pessoa.idade,
        status: status
    }
})

console.log(novoObj)

console.log(pessoas)