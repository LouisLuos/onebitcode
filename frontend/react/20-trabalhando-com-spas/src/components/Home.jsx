import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
        <header>
            <nav style={{display: "flex", gap: "2rem", justifyContent: "space-between"}}>
                <Link to="/">Home</Link>
                <Link to="/products">Produtos</Link>
                <Link to="/cart">Carrinho</Link>
                <Link to="/admin"> Área Administrativa</Link>
            </nav>
        </header>
      <h2>Página inicial!</h2>
      <p>Seja bem-vindo(a) à nossa loja.</p>
    </section>
  )
}