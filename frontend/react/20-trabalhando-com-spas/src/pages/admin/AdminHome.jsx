import { Link } from "react-router-dom";
import Header from "../../components/header";

export default function AdminHome() {
  return (
    <main>
      <Header></Header>
      <h1>Área Administrativa</h1>
      <p>
        Esta é a área de administração da loja. Aqui você poderá adicionar
        produtos e ver os pedidos.
      </p>
    </main>
  );
}
