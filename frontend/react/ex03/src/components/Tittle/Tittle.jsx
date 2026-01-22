import styles from "./styles.module.css"

export default function Tittle({ children }) {
    return (<h2 className={styles.tittleName}>
        {children}</h2>)  
    
}