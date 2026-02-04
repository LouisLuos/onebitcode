import { isRouteErrorResponse } from "react-router-dom";
import { useRouteError } from "react-router-dom";
export default function ProductBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return <h1>Página não encontrada</h1>;
        default:
        return <h1>Algo deu errado</h1>;
    }
  }
}
