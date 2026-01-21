export default function App() {
  const Lep = {Lep: "Douglas"}
  const status = true
  return (
    <div>
      <h1>Olá {Lep.Lep}</h1>
      <h2>Lep está bem? {status ? "sim" : "Não"}</h2>
    </div>
  )
}