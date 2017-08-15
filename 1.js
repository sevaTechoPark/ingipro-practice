// Написать функцию reverseString, которая будет возвращать реверсированную строку

console.log(reverseString("hello")); // "olleh"

function reverseString(str) {
    let rezultStr = [];

    for (let i = 0; i < str.length; i++) {
        rezultStr.push(str[i]);
    }

    rezultStr.reverse();

    return rezultStr.join('');
}
