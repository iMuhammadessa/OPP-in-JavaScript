class user {
    static id=1;

    constructor(name, age, income){
        this.id = user.id++;
        this.name = name;
        this.age = age;
        this.income = income;
    }

    static compareByAge(user1, user2) {
        return user1.age - user2.age;
    }

    static compareByIncome(user1, user2) {
        return user1.income - user2.income;
    }
}

const user1 = new user('John', 40, 5000);
const user2 = new user('Smith', 30, 8000);
const user3 = new user('Doe', 20, 2000);

// console.log(user1, user2, user3);

const users = [user1, user2, user3];
// users.sort(user.compareByAge);
// users.sort(user.compareByIncome);

console.log(users);