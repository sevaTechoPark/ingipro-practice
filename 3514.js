//Найти число, повторяющееся нечетное количество раз
const arr1 = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]; // 5
const arr2 = [1,1,2,-2,5,2,4,4,-1,-2,5] // -1

function findOddRepeat(arr) {
    var tmpArr = [];
    var rezultArr = [];

    for ( var i = 0; i < arr.length - 1; i++){
        if ( tmpArr.indexOf(arr[i]) != -1) continue; // если элемент уже рассматривался

        var count = 1;     // количество элемента
        var index = i + 1; // индекс совпадающего элемента
        
        while ( true ){
            index = arr.indexOf(arr[i],index);
            if ( index == -1 ) break; // больше нет совпадений
            else {
                index++; // поиск совпадений продолжается
            }
            count++;
        }

        tmpArr.push(arr[i]); // пометить элемент как рассмотренный

        if (count % 2 != 0){
            rezultArr.push(arr[i]);
        }
    }

    return rezultArr;
}

console.log(findOddRepeat(arr1));
console.log(findOddRepeat(arr2));