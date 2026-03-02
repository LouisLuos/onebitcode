// src/models/listaModel.js
let colecaoDeListas = [
    { id: 1, titulo: 'Trabalho', tarefas: [] },
    { id: 2, titulo: 'Estudos', tarefas: [] }
];

const listaModel = {
    allListas() {
        return colecaoDeListas;
    },

    buscarListaPorId(id) {
        return colecaoDeListas.find(l => l.id === parseInt(id));
    },

    criarLista(titulo) {
        const novaLista = {
            id: Date.now(),
            titulo,
            tarefas: []
        };
        colecaoDeListas.push(novaLista);
    },

    adicionarTarefa(listaId, texto) {
        const lista = this.buscarListaPorId(listaId);
        if (lista) {
            lista.tarefas.push({
                id: lista.tarefas.length + 1,
                texto,
                status: 'pendente'
            });
        }
    }
};

module.exports = listaModel;