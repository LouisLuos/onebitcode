import Button from "../Button/Button"
import styles from "./styles.module.css"
import useCreatePass from "../../hooks/useCreatePass"
import useCopy from "../../hooks/useCopy"



export default function Menu() {
    const [pass, createPass] = useCreatePass()
    const [copyText, copiarSenha, resetarStatus] = useCopy()
    
    const handleGenerate = () => {
        createPass()     
        resetarStatus()   
    }

    return (
        <div className={styles.menu}>
            <h1>Gerador de senhas</h1>
            <div className={styles.containerButton}>
                <Button onClick={handleGenerate}>Gerar!</Button>
                <Button onClick={() => {
                    navigator.clipboard.writeText(pass)
                    copiarSenha()
                }}>
                    {copyText}
                </Button>
            </div>
            <p>{pass}</p>
        </div>
    )
}

