/**
 * @param {number} n
 * @return {number}
 */

// 0 1 1 2 3 5 8 13

let mem = {};
var fib = function (n) {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    if (mem[n]) {
        return mem[n]
    }

    let prev = mem[n - 1] ? mem[n - 1] : fib(n - 1);
    mem[n - 1] = prev;
    let preprev = mem[n - 2] ? mem[n - 2] : fib(n - 2);
    mem[n - 2] = preprev;
    return prev + preprev;
};


