#!/usr/bin/node
function factorialRecursivo(n) {
    if (n === 0 || n === undefined) {
        return 1;
    } else if (n >= 90) {
        return Infinity;
    } else {
        return n * factorialRecursivo(n - 1);
    }
}

console.log(factorialRecursivo());
console.log(factorialRecursivo(3));
console.log(factorialRecursivo(89));
console.log(factorialRecursivo(333));