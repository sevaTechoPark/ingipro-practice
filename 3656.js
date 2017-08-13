// Задача на знание особенностей JS, внимание к изначальным условиям и умение писать рекурсивные функции.
// Написать функцию глубокого копирования значений, полученных в результате JSON.parse();
var str = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3], "myobject": { "test": "teeest", "value": 100} }';

function deepCopy(val) {
   var copyVal = {};
   for ( var key in val){
       if ( typeof val[key] === "object") {
           if ( val[key].length === undefined) { // объект
               copyVal[key] = deepCopy(val[key]);
           }
           else {   // массив
               copyVal[key] = [];
               for ( var i = 0; i < val[key].length; i++) {
                   copyVal[key][i] =  val[key][i];
               }
           }
       }
       else {
           copyVal[key] = val[key];
       }
   }
   //copyVal.myobject.value = 200;
   return copyVal;
}

var val = JSON.parse(str);
console.log(deepCopy(val));
console.log("-----------------------------");
console.log(val);


