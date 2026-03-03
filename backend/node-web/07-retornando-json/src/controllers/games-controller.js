const games = [
  { id: 1, name: 'Legend of Mana', genres: ['action-rpg'], year: 1999 },
  { id: 2, name: 'World of Warcraft', genres: ['mmorpg'], year: 2004 },
  { id: 3, name: 'Metal Gear Solid', genres: ['stealth', 'action-adventure'], year: 1998 },
  { id: 4, name: 'Sonic Adventure 2', genres: ['platformer'], year: 2001 },
  { id: 5, name: 'Age of Empires 2', genres: ['real-time-strategy'], year: 1999 }
]

module.exports = {

    // Esquema de rotas que o frontend consegue manipular a partir desse formato que estamos criando


    // GET /games
    index: (req, res) => {
      res.json(games)
    },

    // GET /games/:id
    show: (req, res) => {
        console.log(req.params)
        const { id } = req.params
        const game = games.find(game => game.id === Number(id))
        if (!game) {
            res.status(404)
            res.json({ message: 'Game not found' })
        } else {
            res.status(200)
            res.json(game)
        }
    },

    // POST /games
    
    save: (req, res) => {
        const { name, genres, year } = req.body
        if (!name || !genres || !year) {
            res.status(404)
        } else {
        const newGame = {
            id: games.length + 1,
            name: name,
            genres: genres,
            year: year,
        }
        games.push(newGame)
        res.status(201)
        res.json(newGame)
    }
    }



    
    // PUT /games/:id

    // DELETE /games/:id
  
}