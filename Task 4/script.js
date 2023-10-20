class BankAccount{
    constructor(accountNumber, balance){
        this.accountNumber = accountNumber
        this.balance = balance
    }

    depositMoney(cash) {
        this.balance += cash 
        console.log(`Account Number: ${this.accountNumber}`)
        console.log(`Amount Deposited: ${cash}`)
        console.log(`Account Balance: $${this.balance}`)
    }
    withdraw(amount){
        if(this.balance === 0){
            console.log("Your account is empty")
        }else {
            let newBalance = this.balance - amount
            this.balance = newBalance
            console.log(`Amount withdrawn: ${amount}`)
            console.log(`Account Balance: ${this.balance}`)
            console.log(`Account Number: ${this.accountNumber}`)
        }
    }
}

const test = new BankAccount(123456789, 0)
console.log(test.depositMoney(2000))

console.log(test.depositMoney(2000))
console.log(test.withdraw(500))