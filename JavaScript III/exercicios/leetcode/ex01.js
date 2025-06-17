const pessoas = [
  { nome: 'Ana', idade: 25, cidade: 'São Paulo' },
  { nome: 'Bruno', idade: 30, cidade: 'Rio de Janeiro' },
  { nome: 'Carla', idade: 22, cidade: 'São Paulo' },
  { nome: 'Daniel', idade: 35, cidade: 'Belo Horizonte' },
  { nome: 'Elisa', idade: 22, cidade: 'Rio de Janeiro' }
]



pessoas.forEach((pessoa) => {
    const saudacao = `Olá, ${pessoa.nome}`
    console.log(saudacao)
})



const pessoasTrinta = []
const maisTrinta = pessoas.forEach((pessoa) => {
    
    if (pessoa.idade >= 30) {
        pessoasTrinta.push(pessoa)
    }
    
})

console.log(pessoasTrinta)
