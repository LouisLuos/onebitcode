import Button from "../Button/Button"
import styles from "./styles.module.css"
import useCreatePass from "../../hooks/useCreatePass"
import { useState } from "react"
import useCopy from "../../hooks/useCopy"



export default function Menu() {

    const [copy, setCopy] = useCopy()
    const [pass, createPass] = useCreatePass() 

    return (
        <div className={styles.menu}>
            <h1 >Gerador de senhas</h1>
            <div className={styles.containerButton}>
                <Button onClick={createPass}>Gerar!</Button>
                <Button onClick={setCopy}>{copy}</Button>
            </div>
            <p>{pass}</p>
            
        </div>
    )
}