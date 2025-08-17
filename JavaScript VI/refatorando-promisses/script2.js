// // CÓDIGO ANTIGO
// function buscarComTratamentoDeErro() {
//   fetch('https://api.github.com/users/url-que-nao-existe')
//     .then(response => response.json())
//     .catch(error => {
//       console.error('Houve um problema na requisição:', error);
//     });
// }

async function refatorado() {
    try {
        const response = await fetch("https://api.github.com/users/url-que-nao-existe")
        if(!response.ok) {
            Promise.reject("Url não existe")
        } else {
            const responseJson = await response.json()
            console.log(responseJson)
        }
    } catch (error) {
        console.log(error)
    }
    
}