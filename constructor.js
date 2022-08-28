function BankAccount(customerName, balance=0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = function(amount) {
        this.balance += amount;
        // console.log(`${this.customerName} has deposited ${amount} into account ${this.accountNumber}`);
    }

    this.withDraw = function(amount) {
        this.balance -= amount;
        // console.log(`${this.customerName} has withdraw ${amount} into account ${this.accountNumber}`);
    }
}

// const johnAccount = new BankAccount('John Doe', 1000);
// const muhammadAccount = new BankAccount('Muhammad', 2000);

// muhammadAccount.deposit(5000);
// johnAccount.withDraw(500);
// console.log(muhammadAccount, johnAccount);


//========================================================

const accounts = [];

// Account Form 
const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');

// Deposit Account
const depositForm = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const depositAmount = document.querySelector('#depositAmount');

accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = new BankAccount(customerName.value, +balance.value);
    accounts.push(account);
    console.log(accounts);
});

depositForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = accounts.find(
        (account) => account.accountNumber === +accountNumber.value
    );
    account.deposit(+depositAmount.value);
    console.log(accounts);
})