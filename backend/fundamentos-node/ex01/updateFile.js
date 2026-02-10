import fs from 'node:fs'


const updateFile = (content) => {
    fs.writeFile("arquivo.txt", content, (err) => {
    if (err) {
        console.log(err.message)
    }
})
}

export default updateFile
