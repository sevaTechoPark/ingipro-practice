// Напишите функцию getImage(url), которая возвращает промис, переходящий в состояние "resolved",
// если картинка успешно загрузилась; и в "rejected" если при загрузке произошла ошибка.
// Эту функцию можно использовать так:

function getImage(url) {
    return new Promise(function (resolve,reject) {
            let img = new Image(200,200);
            img.src = url;

            img.onload = function () {
                resolve(img);
            };

            img.onerror = function () {
                reject("error");
            }
        }
    );
}

getImage('http://bit.ly/2vntYlL').then(img => {
    //alert("successfully loaded");
    document.getElementById('imageFromJS').innerHTML = "<img src=\" " + img.src + " \" width=\"200\" height=\"200\" />" ;
}).catch(error => {
    alert(error);
});

// Немного теории:
//     Про объект картинки можно почитать тут https://developer.mozilla.org/ru/docs/Web/API/HTMLImageElement/Image
//     У объекта класса Image есть методы onload и onerror.
//     onload вызывается, если картинка успешно загружена,
//     onerror вызывается в случае ошики



// function test() {
//     var a = 1;
//     return function() {
//         console.log(a++);
//     }
// }
//
// test()(); // 1
// test()(); // 1
// var g = test(); // 1
// g(); // 1
// g(); // 2
// g(); // 3