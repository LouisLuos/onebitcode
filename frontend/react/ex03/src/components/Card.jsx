import styles from "./styleContainer.module.css"

// Mantive exatamente os seus nomes de props
function Card({imgProfile, tittleName, descriptonCard, phone, email}) {
    return (
        <div className={styles.container}>
            {/* Usando a variável imgProfile no src */}
            <img className={styles.imgProfile} src={imgProfile} alt="" />
            
            {/* Usando as chaves {} para o texto aparecer */}
            <h1 className={styles.tittleName}>{tittleName}</h1>
            
            <p className={styles.descriptonCard}>{descriptonCard}</p>
            <p className={styles.descriptonCard}>{phone}</p>
            <p className={styles.descriptonCard}>{email}</p>
            
            <button className={styles.buttonCard}>Github</button>
            <button className={styles.buttonCard}>Linkedin</button>
            <button className={styles.buttonCard}>Portifólio</button>
        </div>
    )
}

export default Card