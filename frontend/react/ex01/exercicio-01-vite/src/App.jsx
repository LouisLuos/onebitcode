import reactLogo from "./assets/react.png"

function App() {
  return (
    <>
    <img src={reactLogo} alt=""/>
    <h1>React</h1>
    <p>A biblioteca para interfaces de usuário web e nativas</p>
    <button>Aprenda react</button>
    <button>Referência API</button>
    <hr />
    <h2>Crie interfaces de usuário de componentes</h2>
    <p>React permite que você construa interfaces a partir de componentes individuais</p>
    <hr />
    <h2>Escreva componentes com código e marcação</h2>
    <p>Componentes react são funções JavaScript. A sintaxe de marcação é chamada JSX. É uma extensão Javascript para o react</p>
    <h2>Proximos passos</h2>
    <ul>
      <li>Uso de dados dinâmicos JSX</li>
      <li>Criação de novos componentes</li>
      <li>Estilizando novas componentes</li>
      <li>Reutilização de componente</li>
      <li>Uso de props e children</li>
      <li>Uso de eventos Javascript</li>
    </ul>
    </>
    
  )
}

export default App
