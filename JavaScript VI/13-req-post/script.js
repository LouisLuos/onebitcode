// =======================================================================
// FUNÇÃO DE RENDERIZAÇÃO
// Responsável por criar os elementos HTML de um artigo e adicioná-los à página.
// Ela recebe um objeto com os dados do artigo como argumento.
// =======================================================================
function renderArticle(articleData) {
  // Cria o elemento principal do artigo, a tag <article>.
  const article = document.createElement('article');
  // Adiciona uma classe CSS para estilização.
  article.classList.add('article');
  // Define um ID único para o artigo, facilitando sua remoção ou edição no futuro.
  article.id = `article-${articleData.id}`;

  // Cria o elemento <h3> para o título do artigo.
  const title = document.createElement('h3');
  // Adiciona uma classe CSS para o título.
  title.classList.add('article-title');
  // Define o texto do título com base nos dados recebidos.
  title.textContent = articleData.title;

  // Cria uma <div> para o conteúdo do artigo.
  const content = document.createElement('div');
  // Adiciona uma classe CSS para o conteúdo.
  content.classList.add('article-content');
  // Usa .innerHTML para que o conteúdo possa conter tags HTML (ex: <p>, <strong>).
  content.innerHTML = articleData.content;

  // Cria uma <div> para o nome do autor.
  const author = document.createElement('div');
  // Adiciona uma classe CSS para o autor.
  author.classList.add('article-author');
  // Define o texto do autor com base nos dados recebidos.
  author.textContent = articleData.author;

  // Adiciona o título, autor e conteúdo, nesta ordem, dentro do elemento <article>.
  article.append(title, author, content);
  
  // Encontra a seção principal de artigos na página (com id="articles") e adiciona o novo artigo a ela.
  document.querySelector('#articles').appendChild(article);
}

// =======================================================================
// FUNÇÃO PARA BUSCAR ARTIGOS (GET)
// Função assíncrona que busca a lista de todos os artigos no servidor.
// =======================================================================
async function fetchArticles() {
  // O bloco 'try' tenta executar um código que pode falhar (como uma requisição de rede).
  try {
    // A palavra 'await' pausa a execução da função até que o 'fetch' receba uma resposta do servidor.
    const response = await fetch("http://localhost:3000/articles");

    // 'response.ok' verifica se a resposta HTTP teve sucesso (status entre 200 e 299).
    // Se a resposta for um erro (ex: 404, 500), esta condição será verdadeira.
    if (!response.ok) {
      // 'throw new Error' interrompe a execução do 'try' e pula diretamente para o bloco 'catch'.
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    // 'await' pausa novamente a execução até que o corpo da resposta seja convertido para JSON.
    const articles = await response.json();
    
    // Limpa a lista de artigos na tela antes de renderizar os novos.
    // Isso evita que os artigos sejam duplicados se a função for chamada mais de uma vez.
    document.querySelector('#articles').innerHTML = ''; 
    
    // Itera sobre cada artigo recebido e chama a função 'renderArticle' para exibi-lo na tela.
    articles.forEach(renderArticle);

  } catch (error) {
    // O bloco 'catch' é executado se qualquer coisa dentro do 'try' falhar.
    // 'error' contém o objeto de erro que foi lançado.
    console.error("Falha ao buscar os artigos:", error);
    // É uma boa prática informar ao usuário que algo deu errado.
    document.querySelector('#articles').innerHTML = '<p>Não foi possível carregar os artigos.</p>';
  }
}

// =======================================================================
// LÓGICA PRINCIPAL E EVENTOS
// O código aqui só roda depois que todo o HTML da página foi carregado.
// =======================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Chama a função para buscar e exibir os artigos assim que a página estiver pronta.
  fetchArticles();

  // Encontra o formulário na página.
  const form = document.querySelector('form');

  // Adiciona um "ouvinte" para o evento de 'submit' (envio) do formulário.
  // A função do 'ouvinte' é 'async' para que possamos usar 'await' dentro dela.
  form.addEventListener('submit', async (ev) => {
    // 'ev.preventDefault()' impede o comportamento padrão do navegador de recarregar a página ao enviar um formulário.
    ev.preventDefault();

    // Coleta os dados dos campos do formulário e os organiza em um objeto.
    const articleData = {
      title: document.querySelector('#title').value,
      author: document.querySelector('#author').value,
      content: document.querySelector('#content').value
    };

    // Inicia um bloco 'try' para a requisição de envio do novo artigo.
    try {
      // 'await' espera a resposta do servidor para a nossa requisição POST.
      const response = await fetch('http://localhost:3000/articles', {
        // 'method: 'POST'' especifica que estamos enviando dados para criar um novo recurso.
        method: 'POST',
        // 'headers' informa ao servidor que estamos enviando dados no formato JSON.
        headers: {
          'Content-Type': 'application/json'
        },
        // 'body' contém os dados a serem enviados. É obrigatório converter o objeto JavaScript para uma string JSON.
        body: JSON.stringify(articleData)
      });

      // Novamente, verificamos se a requisição foi bem-sucedida.
      if (!response.ok) {
        throw new Error(`Erro ao salvar o artigo: ${response.statusText}`);
      }

      // 'await' espera a conversão da resposta (o artigo salvo com seu novo ID) para JSON.
      const savedArticle = await response.json();
      
      // Chama a função para renderizar o novo artigo na tela imediatamente.
      renderArticle(savedArticle); 
      // Limpa todos os campos do formulário.
      form.reset(); 

    } catch (error) {
      // Captura qualquer erro que tenha ocorrido durante o envio do formulário.
      console.error("Erro ao enviar o formulário:", error);
      // Informa o usuário sobre a falha.
      alert("Não foi possível salvar o artigo. Tente novamente.");
    }
  });
});
