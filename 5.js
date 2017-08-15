// Написать функцию, которая в переданной строке str меняет слово before на слово after и возвращает новую строку.
// Если слово before начиналось с заглавной буквы, вставленное вместо него слово after тоже должно начинаться с заглавной буквы

console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
// "Let us get back to more Algorithms".
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// "A quick brown fox leaped over the lazy dog"

function myReplace(str, before, after) {
    let index = -1;
    let rezultStr = "";
    let i = 0;
    while ( ~(index = str.indexOf(before,index + 1)) ) { // поиск всех подстрок before
        rezultStr += str.slice(i, index) + after;   // новая строка содержит все до before, after
        i+= index + after.length;   // индекс остальной части строки
    }

    rezultStr += str.slice(i);

    return rezultStr;
}


