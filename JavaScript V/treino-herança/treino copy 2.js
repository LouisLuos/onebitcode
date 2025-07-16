class Shape {
    

    getArea() {
        return 0
    }
}

class Square extends Shape {

    constructor(side){
        super()
        this.side = side
    }

    getArea() {
        return this.side * this.side
    }
}


class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius
    }

    getArea() {
        return Math.PI * this.radius * this.radius
    }
}

const quadrado1 = new Square (10)
console.log(quadrado1.getArea())

const circulo1 = new Circle (5)
console.log(circulo1.getArea().toFixed(2))