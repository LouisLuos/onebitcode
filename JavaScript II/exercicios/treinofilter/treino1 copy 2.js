const notas = [{ nome: 'Daniel', nota: 8 }, { nome: 'Heloisa', nota: 4.5 }, { nome: 'Rafael', nota: 6 }, { nome: 'Livia', nota: 5 }];

const aprovados = notas.filter(function(index) {
    if (index.nota >= 5) {
        return index
    }
})

console.log(aprovados)