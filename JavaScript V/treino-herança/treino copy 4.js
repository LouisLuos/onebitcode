class Account {
  constructor(initialBalance) {
    this.balance = initialBalance
  }
}

class SavingsAccount extends Account {
  applyInterest(interestRate) {
    this.balance += this.balance * interestRate
  }
}

class CheckingAccount extends Account {
  deductFee(fee) {
    this.balance -= fee
  }
}

const savings = new SavingsAccount(1000)
savings.applyInterest(0.05)
console.log(`Saldo poupança: ${savings.balance}`)

const checking = new CheckingAccount(500)
checking.deductFee(5); // 5 de taxa
console.log(`Saldo corrente: ${checking.balance}`)