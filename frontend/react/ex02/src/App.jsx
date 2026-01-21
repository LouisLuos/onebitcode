import Card from "./components/Card";
import swPosterImg from "./assets/sw-poster.jpg"
import esbPosterImg from "./assets/esb-poster.jpg"
import rotjPosterImg from "./assets/rotj-poster.jpg"


export default function App() {
  return (
    <>
    <Card tittle="Pôster: Star Wars (1977)" poster={swPosterImg} />
    <Card tittle="Pôster: Empire Strikes Back (1980)" poster={esbPosterImg} />
    <Card tittle="Pôster: Return of the Jedi (1983)" poster={rotjPosterImg} />
    </>
  )
}