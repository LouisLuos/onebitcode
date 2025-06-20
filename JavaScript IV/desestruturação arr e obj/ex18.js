const config = {
  porta: 8080,
  api: {
    versao: 'v1',
    metodo: 'GET'
  }
};

function configurarServidor({ host = "localHost", porta, api}) {
    const { metodo } = api
    console.log(`Servidor rodando em http://${host}:${porta}`);
    console.log(`Método da API: ${metodo}`);
}

configurarServidor(config);
// Saída esperada:
// Servidor rodando em http://localhost:8080
// Método da API: GET