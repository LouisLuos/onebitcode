// // CÓDIGO ANTIGO
// function buscarDadosDoUsuario() {
//   fetch('https://api.github.com/users/google')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     });
// }

async function buscarDadosDoUsuarioModerno() {
    const response = await fetch("https://api.github.com/users/google")
    const responsJson = await response.json()
    console.log(responsJson)
}