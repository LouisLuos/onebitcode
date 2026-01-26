import { useState } from "react"

export default function useCopy () {
    const [copy, setCopy] = useState("Copiar")

    const copiarSenha = () => {
        setCopy("Copiado")
    }

    return [copy, copiarSenha]
}