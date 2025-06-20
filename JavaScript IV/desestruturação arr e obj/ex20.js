const dados = {
  usuarios: [
    { nome: 'Ana', hobbies: ['Leitura', 'Caminhada'] },
    { nome: 'Carlos', hobbies: ['Fotografia', 'Culinária', 'Viagem'] }
  ],
  config: {
    tema: 'escuro'
  }
};

const { usuarios } = dados
const [ , pessoaCarlos] = usuarios

const { hobbies } = pessoaCarlos

const [ primeiroHobby] = hobbies

 console.log(primeiroHobby); // Saída: Fotografia