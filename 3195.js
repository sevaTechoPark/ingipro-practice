//Напишите функцию, которая в данном интерфейсе возвращает одно случайное число через случайный промежуток времени.
    function randomNumber() {
    return Math.random() * 100;
}

setTimeout(
  function () {
      console.log(randomNumber());
  },
  Math.random() * 10 * 1000
);
