function BankAccount(customerName, balance=0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
}

const MuhammadAccount = new BankAccount('Muhammad');
BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
}

BankAccount.prototype.withdraw = function(amount) {
    this.balance -= amount;
}

MuhammadAccount.deposit(3000);
MuhammadAccount.withdraw(500);

console.log(MuhammadAccount);
