class Customer {
    constructor (name) {
        this.name = name
        this.totalOrder = []
    }
    addOrder (order) {
        this.totalOrder.push(order)
    }

    getTotalSpent() {
    return this.totalOrder.reduce((sum, order) => sum + order.value, 0);
  }
}

class Order {
    constructor (order, value) {
        this.order = order
        this.value = value
    }
}

const cliente1 = new Customer("Luiz")
cliente1.addOrder(new Order("X-bacon", 25))
cliente1.addOrder(new Order("X-egg", 20))
console.log(cliente1)

console.log(`O valor total dos pedidos de ${cliente1.name}, : ${cliente1.getTotalSpent()}R$`)
