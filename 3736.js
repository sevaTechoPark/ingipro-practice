/**
 * Дана строка, состоящая из букв A-Z:
 * "AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"
 * Нужно написать функцию RLE, которая на выходе даст строку вида:
 * "A4B3C2XYZD4E3F3A6B28"
 * И сгенерирует любую ошибку, если на вход пришла невалидная строка.
 *
 * Пояснение:
 * 1. если символ встречается 1 раз, он остается без изменений
 * 2. если символ повторяется более 1 раза, к нему добавляется количество повторений
 */

function rle(str) {
    for ( var i = 0; i < str.length; i++) {
        if ( str[i].charCodeAt(0) < 65 || str[i].charCodeAt(0) > 90) {
            return "ERROR";
        }
    }

    var rezultStr = "";
    var tmpSymbol = str[0];
    var count = -1;
    for ( i = 0; i < str.length; i++) {
        count++;
        if ( tmpSymbol != str[i]) {
            rezultStr += tmpSymbol + count;
            tmpSymbol = str[i];
            count = 0;
        }
    }
    
    rezultStr += tmpSymbol + ++count;

    return rezultStr;
}

console.log(rle("AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"));