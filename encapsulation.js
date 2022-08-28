class BankAccount {
    customerName;
    accountNumber;
    #balance = 0;

    constructor(customerName, balance=0){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;

    }

    deposit(amount){
        this.#balance += amount;
    }

    withdraw(amount){
        this.#balance -= amount;
    }

    set balance(amount){
        if(isNaN(amount)){
            throw new Error('Amount is not a valid input');
        }
        this.#balance = amount;
    }

    get balance(){
        return this.#balance;
    }
}

class CurrentAccount extends BankAccount {
    transactionLimit = 50000;

    constructor(customerName, balance=0) {
        super(customerName, balance);
    }

    #calculatingInterest(amount){
        console.log('Calculating Interest amount ' + amount);
    }

    takeBusinessLoan(amount) {
        this.#calculatingInterest(amount);
        console.log('Taking business loan: ' + amount);
    }
}

const muhammadAccount = new CurrentAccount('Muhammad', 3000);
// muhammadAccount.balance(400);

muhammadAccount.takeBusinessLoan(40);

console.log(muhammadAccount);