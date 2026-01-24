import styles from "./styles.module.css"

export default function LinkButtom (props) {

    function Click (ev) {
    console.log(ev)
    alert("Você esta seguindo")
  }
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