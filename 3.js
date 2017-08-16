/*
Показать пользователю погоду в нескольких городах
Пользователь вводит через запятую названия городов.
Нужно получить для этих городов погоду из ручки http://openweathermap.org/current#name.
И вывести пользователю информацию о погоде в этих городах
Например, пользователь ввел: Moscow, New-York, London.
Покажем ему сообщение:
"Moscow: температура 21C, скорость ветра 4.1, влажность 80%,
New-York: температура 26C, скорость ветра 7.1, влажность 70%,
London: температура 19C, скорость ветра 1.1, влажность 90%"
*/

'use strict';

function getCityJson(city) {
    const APPID = "bd5e378503939ddaee76f12ad7a97608";
    return fetch("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="+APPID).then(
        response => {
        if ( response.status == 200) {
        return response.json();
    } else {
        throw new Error(response.statusText);
    }
}
)
.catch(
        error => {
        throw new Error(error.statusText);
}
);

}

function getWether(city) {
    let arrCities = city.split(", ");
    arrCities.forEach( function (value, i, arr) {
        getCityJson(value).then(
            cityJson => {
            let temperature = (cityJson.main.temp - 273).toFixed(1) + String.fromCharCode(176);
            let windSpeed   = cityJson.wind.speed;
            let humidity    = cityJson.main.humidity;
            let nameCity    = cityJson.name;

            alert(nameCity + ": температура: " + temperature + ", скорость ветра " + windSpeed + ", влажность " + humidity + "%\n");
            }
        ).catch(
                error => {
                alert(error);
                return;
                }
        );
    });

}

let city = prompt("Your city","Moscow, New-York, London");
getWether(city);