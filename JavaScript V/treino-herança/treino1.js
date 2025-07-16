class Vehicle {
    constructor(brand, model) {
        this.brand = brand
        this.model = model

    }
}

class Car extends Vehicle {
    constructor(brand, model, doors) {
        super(brand, model)
        this.doors = doors
    }

    getDoors() {
        return this.doors
    }
}


class Motorcycle extends Vehicle {
    constructor(brand, model, cylinders) {
        super(brand, model)
        this.cylinders = cylinders 
    }

    getCilinders() {
        return this.cylinders
    }
}  

const cb600 = new Motorcycle("Honda", "Cb600f", 600)
const audia3 = new Car ("Audi", "A3", 4)

console.log(cb600)
console.log(cb600.getCilinders())
console.log(audia3)
console.log(audia3.getDoors())