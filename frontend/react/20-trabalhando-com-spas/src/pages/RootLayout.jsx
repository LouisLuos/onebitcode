import { Outlet } from "react-router-dom";
import Header from "../components/header";

export default function RootLayout() {
  return (
    <>
      <Header></Header>
      <main>
        <p>esse é o layout principal abaio vai estar o content de cada rota</p>
        <hr />
        <Outlet></Outlet>
        <footer>
          <p>feito com react router DOm</p>
        </footer>
      </main>
    </>
  );
}
