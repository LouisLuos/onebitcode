class Product {
    constructor (name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(quantity) {
        this.inStock =+ quantity
    }
    calculateDiscount(porcentagem) {
        return this.price * ((100 - porcentagem) / 100) 
    }
}

const produto1 = new Product ("arroz", "turquesa", 100)
produto1.addToStock(15)
const produtoComDesconto = produto1.calculateDiscount(50)

console.log(produto1)
console.log(produtoComDesconto)

