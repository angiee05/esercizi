function sum(...num) {
    return num.reduce((prev, curr) => prev + curr);
}

console.log(sum(1, 2, 3, 4, 5));