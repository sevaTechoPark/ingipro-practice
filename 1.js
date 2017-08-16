/*
Для решения задач будем пользоваться бесплатным апи погоды: https://openweathermap.org.
Чтобы делать запрос будем использовать метод fetch (http://learn.javascript.ru/fetch).
Так же в query параметрах запроса нужно будет передать appid=bd5e378503939ddaee76f12ad7a97608.
Без этого параметра будет ошибка 401 Unauthorized.
Пример урла запроса 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=bd5e378503939ddaee76f12ad7a97608'

О параметрах, которые можно передавать в ручки и о формате ответа написано на странице http://openweathermap.org/current.

Показать пользователю информацию о погоде в его городе.
Предложить пользователю ввести название города.
Сделать запрос к ручке получения текущей погоды в этом городе (http://openweathermap.org/current#name).
Если ответ получен, вывести пользователю температуру в цельсиях, продолжительность дня, скорость ветра.
Если возникли ошибки, вывести сообщение об ошибке
Полезные ссылки:
Cписок всех доступных городов можно посмотреть тут http://bulk.openweathermap.org/sample/ - большой json.
Можно просто английские названия городов использовать вроде (Moscow, London, New-York ...) - работают.
 */


'use strict';

function getCityJson(city) {
    const APPID = "bd5e378503939ddaee76f12ad7a97608";
    return fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APPID).then(
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
    getCityJson(city).then(
        cityJson => {
            let temperature = (cityJson.main.temp - 273).toFixed(1) + String.fromCharCode(176);
            let hours = Math.floor((cityJson.sys.sunset - cityJson.sys.sunrise) / 3600);
            let minutes = Math.round((cityJson.sys.sunset - cityJson.sys.sunrise) % 3600 / 60);
            let durationOfDay = hours + " часов " + minutes + " минут";
            let windSpeed = cityJson.wind.speed + " м/c";
            alert("В городе " + cityJson.name + " температура: " + temperature + ".\nПродолжительность: " + durationOfDay + " , скорость ветра: " + windSpeed + ".\nПриятного дня!");
        }
    ).catch(
        error => {
            alert(error);
        }
    );
}

let city = prompt("Your city","Moscow");
getWether(city);

// как вернуть значение из promise
// alert не понимает ${}