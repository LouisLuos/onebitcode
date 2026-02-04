import { Link } from "react-router-dom";
import products from "../database.json";
import { useParams } from "react-router-dom";

export default function Product() {
  const { productId } = useParams();

  const product = products.find((p) => p.id === +productId)

  if (!product) {
    return <p>Produto não encontrado</p>;
  }

  return (
    <section>
      <Link to="/products">
        <button>Voltar</button>
        </Link>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>R$ {product.price}</p>
        <button>Adicionar ao carrinho</button>
      
    </section>
  );
}
