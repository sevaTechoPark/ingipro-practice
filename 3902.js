// Реализовать функцию sum()
// sum(1);       // => 1
// sum(1)(2);    // => 3
// sum(1)(2)(3); // => 6


function sum(a) {
var currentSum = a;

function f(b) {
    currentSum += b;
    return f;
}

f.toString = function() {
    return currentSum;
};

return f;
}

console.log( sum(1).toString() );
console.log( sum(1)(2).toString() );
console.log( sum(1)(2)(3).toString() );