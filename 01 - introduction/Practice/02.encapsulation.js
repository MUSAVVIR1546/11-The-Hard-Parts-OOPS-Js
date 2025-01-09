class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited amount ${amount} and total amount is ${this.balance}`);
    }

    getBalance() {
        console.log(`${this.balance}`);;
    }
}

let account = new BankAccount(5000);
account.deposit(1000);
account.getBalance()