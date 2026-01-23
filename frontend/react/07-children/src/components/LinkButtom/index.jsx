import styles from "./styles.module.css"

export default function LinkButtom (props) {
    return (
        <a 
        className={styles.wrapper}
        href={props.linkDoBotao}
        target="_blank"
        >
        {props.children}
        </a>
    )
}