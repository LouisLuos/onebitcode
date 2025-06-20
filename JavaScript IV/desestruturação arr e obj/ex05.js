const pessoa = {
  nome: 'Mariana',
  idade: 30
};

function apresenta({ nome, idade }) {
    console.log(`Olá! Meu nome é ${nome} e eu tenho ${idade}`)
}

apresenta(pessoa)

// apresenta(pessoa); // Saída: Olá, meu nome é Mariana e eu tenho 30 anos.