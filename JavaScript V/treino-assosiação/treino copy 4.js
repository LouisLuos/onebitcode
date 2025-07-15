class Adress {
    constructor (street, city) {
        this.street = street
        this.city = city
    }
    getFullAddress() {
    return `${this.street}, ${this.city}`;
  }
}

class House {
    constructor (color, street, city) {
        this.color = color
        this.adress = new Adress(street, city)
    }
}

const myHouse = new House ("Blue", "Rua 12", "Recife")

console.log(myHouse)
console.log(myHouse.adress.getFullAddress())