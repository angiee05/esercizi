class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  NegativeAmountError = new Error('The amount provided cannot be negative')

  WithdrawNotPermittedError = new Error('You cannot withdraw more than account balance')

  deposit(amount) {
    if (amount < 0) {
      throw this.NegativeAmountError; // Use custom Error class
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw this.NegativeAmountError; // Use custom Error class
    }

    if (this.#amount < amount) {
      throw this.WithdrawNotPermittedError; // Use custom Error class
    }

    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log('Something went wrong during bank account operations');
}