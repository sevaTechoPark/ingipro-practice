// Написать функцию, принимающую на вход произвольную строку и длину строки, и возвращающую исходную строку, 
// в которую вставлены символы перевода строки ('\n') в нужных местах, так, чтобы ни одна подстрока не превышала заданную длину.
// По возможности нужно перносить по границам слов. Например:
// wrap("мама мыла раму", 11); // "мама мыла\nраму"
// wrap("экскурсия", 4); // экск\nурси\nя

function wrap(string,value) {
    var arr = string.split(' '); // превращаем строку в массив
    var length = 0;
    for ( var i = 0; i < arr.length; i++) {
        length += arr[i].length;
        if ( length >= value) {    // необходим поставить символ перевода строки
            if ( arr[i].length <= value ) {  // возможно перенести по границе слова
                arr[i] = '\n' + arr[i] + '\n';
                length = 0;
            }
            else {
                var tmpString = arr[i];
                arr[i] = "";
                for (var j = 0; j < Math.floor(tmpString.length / value); j++){ // сколько раз придеться резать слово
                    var start = j * 2 * value;
                    arr[i] += tmpString.slice(start,start + value) + '\n' + tmpString.slice(start + value,start + 2 * value) + '\n';
                }
                length = tmpString.length % value;
            }

        }
    }

    string = arr.join(' '); // превращаем массив в строку
    return string;
}

console.log(wrap("мама мыла раму", 11));
console.log(wrap("экскурсия", 4));

