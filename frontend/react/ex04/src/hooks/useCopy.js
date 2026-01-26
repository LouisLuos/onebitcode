import { useState } from "react"

export default function useCopy() {
    const [copy, setCopy] = useState("Copiar")
    
    const copiarSenha = () => setCopy("Copiado")
    const resetarStatus = () => setCopy("Copiar")

    return [copy, copiarSenha, resetarStatus]
}