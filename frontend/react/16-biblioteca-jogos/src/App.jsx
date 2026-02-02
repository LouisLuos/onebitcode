import { useState } from "react"
import Game from "./components/Game"
import NewGameForm from "./components/NewGameForm"

function App() {
  const [games, setGames] = useState(() => {
    const storedGames = localStorage.getItem("obc-game-lib")
    if (!storedGames) return []
    return JSON.parse(storedGames)
  }) 
  

  

  const removeGame = (id) => {
  setGames(state => {
    const newState = state.filter(game => game.id !== id)
    localStorage.setItem("obc-game-lib", JSON.stringify(newState))
    return newState
  })
}

  const addGames = ({title, cover}) => {
    const id = Math.floor(Math.random() * 100000)
    const game = {id, title, cover}
    setGames(state => {
      const newState = [...state, game]
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
      
  })
  }
  return (
    <div className="app">
      <h1>Biblioteca de Jogos</h1>
      <NewGameForm addGames={addGames} />
      <div className="games">
        {games.map((game) => (
          <Game
          key={game.id}
          title={game.title}
          cover={game.cover}
          onRemove={() => removeGame(game.id)}
          ></Game>
        ))}
      </div>
    </div>
  )
}

export default App