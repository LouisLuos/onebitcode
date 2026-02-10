import fs from 'node:fs'

const showFile = () => {
    fs.readFile("arquivo.txt", "utf-8", (err, data) => {
        if (err) {
            console.log(err.message)
        }
        console.log(data)
    })
}

export default showFile

