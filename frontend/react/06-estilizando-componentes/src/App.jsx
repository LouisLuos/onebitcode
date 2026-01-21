import SubTittle from "./components/SubTittle"
import Tittle from "./components/Tittle"
import styles from "./App.module.css"
export default function App() {
  return (
    <div className={styles.app}>
      <Tittle></Tittle>
      <SubTittle></SubTittle>
    </div>
  )
}


