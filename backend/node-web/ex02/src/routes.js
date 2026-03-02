const express = require('express')
const listaController = require('./controllers/listaController')
const router = express.Router()

// src/routes.js
router.get('/', listaController.index); // Página com todas as listas
router.post('/lista/criar', listaController.criarLista); // Criar nova lista
router.get('/lista/:id', listaController.exibirLista); // Ver tarefas de uma lista específica
router.post('/lista/:id/adicionar', listaController.adicionarTarefa); // Adicionar tarefa na lista específica
router.post('/alterar-status', listaController.alterarStatus);
module.exports = router