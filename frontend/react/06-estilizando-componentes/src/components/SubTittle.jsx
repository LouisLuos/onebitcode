export default function SubTittle() {
    const status = false
    return <h2 style={{ color: status ? "#e3e3e3" : "#f64348"}}>Lep está bem? {status ? "Sim" : "Não"}</h2>
}