
import UserContext from "./contexts/UserContext"

export default function App() {
  const user = {
    name: "João",
    email: "joao@gmailcom"
  }
  
  return (
    <UserContext.Provider value={user}>
      <h1>Teste {user.name} {user.email}</h1>
      </UserContext.Provider>
  )
}

