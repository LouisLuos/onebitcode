    const os = require("node:os")
    const monitorSistema = () => {
        const sistemaOperacional = os.platform()
        const arquitetura = os.arch()
        const modeloProcessador = os.cpus()[0].model
        const tempoSistema = os.uptime()
        const memory = os.totalmem()
        const memoryFormated = (memory / 1024 / 1024 / 1024).toFixed(2)

        const system = {
        sistemaOperacional,
        arquitetura,
        modeloProcessador,
        tempoSistema,
        memoryFormated
        
    }
        return system
    }
module.exports = monitorSistema

