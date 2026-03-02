const listaModel = require('../models/listaModel')

const listaController = {

   index: (req, res) => {
        const listas = listaModel.allListas();
        res.render('index', { listas });
    },

    criarLista: (req, res) => {
        const { titulo } = req.body;
        if (titulo) {
            listaModel.criarLista(titulo);
        }
        res.redirect('/');
    },

    exibirLista: (req, res) => {
        const lista = listaModel.buscarListaPorId(req.params.id);
        res.render('lista', { lista });
    },

    adicionarTarefa: (req, res) => {
        const { id } = req.params;
        const { tarefa } = req.body;
        listaModel.adicionarTarefa(id, tarefa);
        res.redirect(`/lista/${id}`);
    },

    alterarStatus: (req, res) => {
    const { listaId, tarefaIndex } = req.body; // Recebe o ID da lista e o índice da tarefa
    const lista = listaModel.buscarListaPorId(listaId);
    
    if (lista && lista.tarefas[tarefaIndex]) {
        const tarefa = lista.tarefas[tarefaIndex];
        tarefa.status = tarefa.status === 'finalizada' ? 'pendente' : 'finalizada';
        return res.redirect(`/lista/${listaId}`);
    }
    res.redirect('/');
}
}

module.exports = listaController