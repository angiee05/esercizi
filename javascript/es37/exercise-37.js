class BankAccount {
    constructor(acc) {
        this.acc = acc;
    }
    deposit (money){
        this.acc += money
        return this.acc;
    }
    withdraw (money){
        this.acc -= money
        return this.acc;
    }
    view (){
        console.log(this.acc);
    }
    
}


const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();