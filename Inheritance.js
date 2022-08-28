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

class CurrentAccount extends BankAccount {
    transactionLimit = 50000;

    constructor(customerName, balance=0) {
        super(customerName, balance);
    }

    takeBusinessLoan(amount) {
        console.log('Taking business loan: ' + amount);
    }
}

class SavingAccount extends BankAccount {
    transactionLimit = 10000;

    constructor(customerName, balance=0) {
        super(customerName, balance);
    }

    takePersonalLoan(amount) {
        console.log('Taking personal loan: ' + amount);
    }
}


const muhammadAccount = new CurrentAccount('Muhammad', 500);
muhammadAccount.deposit(1000);
muhammadAccount.withdraw(800);
muhammadAccount.takeBusinessLoan(6000);
console.log(muhammadAccount);














// function BankAccount(customerName, balance=0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//     this.balance += amount;
// }

// BankAccount.prototype.withdraw = function (amount) {
//     this.balance -= amount;
// }

// function CurrentAccount(customerName, balance=0) {
//     BankAccount.call(this, customerName, balance);
//     this.transactionLimit = 50000;
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype);

// CurrentAccount.prototype.takeBusinessLoan = function(amount) {
//     console.log('Taking business loan: ' + amount);
// }


// function SavingAccount(customerName, balance=0) {
//     BankAccount.call(this, customerName, balance);
//     this.transactionLimit = 50000;
// }

// SavingAccount.prototype = Object.create(BankAccount.prototype);

// SavingAccount.prototype.takePersonalLoan = function(amount) {
//     console.log('Taking personal loan: ' + amount);
// }


// const muhammadAccount = new SavingAccount('Muhammad', 500);
// muhammadAccount.deposit(1000);
// muhammadAccount.withdraw(800);
// console.log(muhammadAccount);