class Album {
    constructor(tittle, artist) {
        this.tittle = tittle
        this.artist = artist
        this.listSong = [] 
    }
    addSong(song) {
        this.listSong.push(song)
    }
}

class Song {
    constructor(tittle, duration) {
        this.tittle = tittle
        this.duration = duration
    }
}

class Songg {
    constructor(tittle, duration, genero) {
        this.tittle = tittle
        this.duration = duration
        this.genero = genero
    }
}

const song1 = new Song ("Quinta-Feira", "03:30")
const song2 = new Song ("Te levar daqui", "04:53")
const song3 = new Songg ("Hoje eu acordei feliz", "02:43", "Rock")
const abalandoSuaFabrica = new Album ("AbalandoSuafabrica", "CBJR")
console.log(song1)
abalandoSuaFabrica.addSong(song1)
abalandoSuaFabrica.addSong(song2)
abalandoSuaFabrica.addSong(song3)

console.log(abalandoSuaFabrica)