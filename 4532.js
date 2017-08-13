//Написать функцию truncate(str, count), которая будет обрезать строку по словам.
// truncate(str, 7); // 'Мама...'
// truncate(str, 11); // 'Мама мыла...'

var str = 'Мама мыла раму';

function truncate(str,value) {
    var arr = str.split(' '); // превращаем строку в массив
    var length = 0;
    var rezultStr = "";
    arr.forEach(function (item, i, str) {
        length += item.length;
        if ( length <= value) {
            rezultStr += item + ' ';
        }
    });

    return rezultStr;
}

console.log(truncate(str, 7));
console.log(truncate(str, 11));