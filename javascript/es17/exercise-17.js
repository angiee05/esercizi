function calculate() {
  let x = 0;
  return {
    add(num){
      x += num;
      console.log(x);
      return this;
    },
    sub(num) {
      x -= num;
      console.log(x);
      return this;
    },
    multiply(num) {
      x *= num;
      console.log(x);
      return this;
    },
    divide(num) {
      x /= num;
      console.log(x);
      return this;
    },
    printResult() {
      console.log(x);
    }
  }
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7