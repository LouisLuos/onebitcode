import Button from "../Button/Button"
import styles from "./styles.module.css"

export default function Menu() {
    return (
        <div className={styles.menu}>
            <h1>Gerador de senhas</h1>
            <div className={styles.containerButton}>
                <Button>Gerar!</Button>
                <Button>Copiar</Button>
            </div>
            
        </div>
    )
}