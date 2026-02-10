import fs from 'node:fs'

const deleteFile = () => {
    fs.unlink("arquivo.txt", (err) => {
        if (err) {
            console.log(err.message)
        }
    })
}

export default deleteFile