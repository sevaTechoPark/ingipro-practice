//На входе два массива:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 5, 6, 7];
//Нужно написать функцию, которая возвращает массив с числами из переданных массивов без дубликатов:
function removeDuplicates(arr1, arr2) {
    var arr3 = arr1.slice();
    for(var i = 0; i < arr2.length; i++){
        if ( arr3.indexOf(arr2[i]) == -1){
            arr3.push(arr2[i]);
        }
    }
    return arr3;
}
var tempArr = removeDuplicates([],arr1); // исключаем повторения в первом массиве.
console.log(removeDuplicates(tempArr,arr2));  //[1, 2, 3, 4, 5, 6, 7]