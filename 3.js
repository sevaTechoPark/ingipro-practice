// Написать функцию, котоая разбивает переданный массив arr на группы длиной size.

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // [["a", "b"], ["c", "d"]]

function chunkArrayInGroups(arr, size) {
    let rezultArr = [];

    for ( let i = 0; i < Math.floor(arr.length / size); i++) {
        rezultArr.push(arr.slice(i * size, i * size + size));
    }

    return rezultArr;
 }

