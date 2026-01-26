import styles from "./styles.module.css"

export default function Button(props) {
    return (
            <button 
            {...props}
            className={styles.buttonStyle}
            
            >{props.children}</button>
        
    )
}