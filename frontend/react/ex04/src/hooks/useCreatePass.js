import { useState } from "react";

export default function useCreatePass() {
    const [pass, setPass] = useState("")
    const createPass = () => {
        const newPassword = Math.random().toString(36).slice(-8)
        setPass(newPassword)
        
    }
    return [pass, createPass];
}