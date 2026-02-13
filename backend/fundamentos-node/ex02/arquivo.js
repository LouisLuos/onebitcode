const monitorSistema = require("./so")

const fs = require("node:fs")
const path = require("node:path")
const diretorioDestino = path.join("C:", "log", "log.txt");


const iniciarLog = () => {
    const dados = monitorSistema();
    const linhaTexto = JSON.stringify(dados) + "\n";
    fs.appendFileSync(diretorioDestino, linhaTexto, "utf-8")
}

setInterval(iniciarLog, 5000);
