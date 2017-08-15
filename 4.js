// Написать функцию, которая возвращает сумму указанных чисел и всех чисел между ними. Шаг равен 1.
// Первое число необязательно наименьшее

console.log(sumAll([1, 4])); // 10 (1+2+3+4)
console.log(sumAll([10, 5])); // 45 (10+9+8+7+6+5)

function sumAll(arr) {
    let rezult =  ( arr[0] + arr[1] ) * ( Math.abs(arr[0] - arr[1]) + 1) / 2; // Sn = ( a1 + an) * n / 2
    return rezult;
}
