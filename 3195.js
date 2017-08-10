//Напишите функцию, которая в данном интерфейсе возвращает одно случайное число через случайный промежуток времени.
    function randomNumber() {
    var delay = (new Date()).getTime();
    while ( (new Date()).getTime() - delay < Math.random() * 10000); // задержка
    return Math.random() * 100;
}

console.log(randomNumber());
