import styles from "./styleCard.module.css"

export default function Card (props) {
    return (
        <div className={styles.background}>
            <img 
                className={styles.img} 
                src={props.poster} 
                alt="Poster Star Wars" 
            />
            
            <div className={styles.content}>
                <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                    {props.tittle}
                </h1>
                <p>
                    Um pôster decorativo épico do filme Star Wars, com moldura de MDF 
                    e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes 
                    de todos os tempos.
                </p>
                <button style={{width: "7rem", height: "2rem", borderRadius: "0.2rem", backgroundColor: "black", color: "white"}}>Comprar Agora</button>
            </div>
        </div>
    )    
}