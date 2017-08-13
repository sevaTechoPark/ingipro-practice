//Напишите код, который сделает из массива объект
// на входе массив
var arr = [
    {name: 'width', value: 10},
    {name: 'height', value: 20}
];
// на выходе объект {width: 10, height: 20}

function transformArrayToObject(arr) {
    var object = {};
    for (var i = 0; i < arr.length; i++) {
        var j = 0;
        var newKey;
        for (var key in arr[i]) {
            if ( j % 2 == 0) {  // ключ в исходном массиве
                newKey = arr[i][key];
            }
            else {              // значение в исходном массиве
                object[newKey] = arr[i][key];
            }
            j++;
        }
    }

    return object;
}

console.log(transformArrayToObject(arr));