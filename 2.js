// Написать функцию palindrome, которая будет возвращает true, если переданная строка является полиндромом, и false, если не является
console.log(palindrome("eye")); // true
console.log(palindrome("hello"));   // false
console.log(palindrome("А роза упала на лапу Азора"));   // true

// replace(/\s/g,'') \s - любой пробельный символ. g - флаг поиска последоват. совпад. '' - заменитель
function palindrome(str) {
    str = str.replace(/\s/g,''); // удалить все пробельные символы
    str = str.toUpperCase();    // чтобы сделать все буквы одного регистра

    for ( let i = 0; i < str.length; i++) {
        if ( str[i] != str[str.length - i - 1]) {
            return false;
        }
    }

    return true;
}
