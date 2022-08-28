class BankAccount {
    customerName;
    accountNumber;
    balance = 0;

    constructor(customerName, balance=0){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;

    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        this.balance -= amount;
    }
}

const MuhammadAccount = new BankAccount('Muhammad', 1000);
MuhammadAccount.deposit(5000);
MuhammadAccount.withdraw(1500);

console.log(MuhammadAccount);