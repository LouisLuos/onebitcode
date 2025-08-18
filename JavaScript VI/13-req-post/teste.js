// Função assíncrona para criar um novo post
async function criarNovoPost(titulo, corpoDoPost, idDoUsuario) {
  
  // 1. ONDE ENVIAR: O endpoint da API que aceita a criação de posts.
  const url = 'https://jsonplaceholder.typicode.com/posts';

  // 2. O QUE ENVIAR: Criamos um objeto JavaScript com os dados do novo post.
  const dadosDoPost = {
    title: titulo,
    body: corpoDoPost,
    userId: idDoUsuario,
  };

  // 3. COMO ENVIAR: O objeto de configurações para o fetch.
  const opcoesDaRequisicao = {
    // 3.1. O método: Fundamental para definir que é um POST.
    method: 'POST',

    // 3.2. Os cabeçalhos (Headers): Informações extras para o servidor.
    // Aqui dizemos: "Servidor, estou te enviando dados no formato JSON".
    headers: {
      'Content-Type': 'application/json',
    },

    // 3.3. O corpo (Body): Onde os nossos dados realmente vão.
    // É ESSENCIAL converter o objeto JavaScript para uma string JSON.
    body: JSON.stringify(dadosDoPost),
  };

  // Agora, fazemos a requisição dentro de um bloco try...catch.
  try {
    console.log("Enviando dados para o servidor...");

    const response = await fetch(url, opcoesDaRequisicao);

    // Verificamos se a criação foi bem-sucedida (status 201 Created)
    if (!response.ok) {
      // Se o servidor retornar um erro (ex: 400, 500), nós o lançamos.
      throw new Error(`Erro na criação do post! Status: ${response.status}`);
    }

    // O servidor geralmente responde com o objeto que foi criado, incluindo um ID.
    const postCriado = await response.json();

    console.log("Post criado com sucesso!");
    console.log("ID do novo post:", postCriado.id);
    console.log("Título:", postCriado.title);
    
    return postCriado;

  } catch (error) {
    console.error("Houve uma falha ao criar o post:", error.message);
  }
}

// --- Como usar a função ---
criarNovoPost('Meu Primeiro Post', 'Este é o conteúdo do meu incrível post.', 1);
