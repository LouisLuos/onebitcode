import fs from 'node:fs'


const createFile = (content) => {
    fs.writeFile("arquivo.txt", content, (err) => {
    if (err) {
        console.log(err.message)
    }
})
}

export default createFile