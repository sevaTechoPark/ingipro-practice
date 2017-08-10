//Нужно написать функцию range() аналогичную тому что есть в python.
/*
range(10) // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
range(1, 11)  // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
range(0, 30, 5) // => [0, 5, 10, 15, 20, 25]
range(0, 10, 3) // => [0, 3, 6, 9]
range(0) // => []
*/

function range(start,stop,step) {
    var arr = [];
    if ( stop === undefined){
        for ( var i = 0; i < start; i++){
            arr[i] = i;
        }
    }
    else if ( step === undefined){
        for ( var i = 0; i < stop - start; i++){
            arr[i] = i + start;
        }
    }
    else {
        for ( var i = 0; i < (stop - start) / step; i++){
            arr[i] = (i + start) * step;
        }
    }

    return arr;
}

console.log(range(10));
console.log(range(1,11));
console.log(range(0,30,5));
console.log(range(0,10,3));
console.log(range(0));