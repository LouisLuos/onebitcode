import { useState } from "react"

export default function NewGameForm ({ addGames}) {

    const [title, setTitle] = useState("")
    const [cover, setCover] = useState("")

    const handleSubmit = (ev) => {
    ev.preventDefault()
    addGames({ title, cover})
    setTitle("")
    setCover("")
  }

    return (
        <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Título:</label>
              <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="cover">Capa:</label>
              <input type="text" id="cover" value={cover} onChange={(e) => setCover(e.target.value)} />
            </div>
            <button type="submit">Adicionar</button>
          </form>
    )
    
}