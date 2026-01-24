import styles from "./styles.module.css"

export default function ProfileSection (props) {
    return (
        <div
        {...props} // className={styles.links} é como se eu tivesse escrito isso e depois
        // aqui em baixo sobrescrito com essa minha outro css e como o css ler em cascata...
        className={`${styles.wrapper} ${props.className}`}
        >
            {props.children}
        </div>
    )
}