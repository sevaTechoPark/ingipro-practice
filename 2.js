/*
Теплее ли в ближайшем городе?
Как в 1ой задаче предложить пользователю ввести название города.
Сделать запрос к ручке получения текущей погоды в этом городе (http://openweathermap.org/current#name).
Из ответа узнать координаты его города. Сделать запрос к ручке http://openweathermap.org/current#cycle, и узнать
погоду в 5 ближайших городах.
Найти город с максимальной температурой. Вывести сообщение.
Например, пользователь ввел Moscow.
Покажем ему сообщение:
"В городе Ryazanovo температура 21C. Это на 2С теплее, чем в Moscow". - Если температура выше, чем в городе пользователя
"В городе Moscow теплее, чем в 5 ближайших городах". - Если в найденных городах температура ниже, чем в городе пользователя
*/

'use strict';

const APPID = "bd5e378503939ddaee76f12ad7a97608";

function getCityJson(city) {    // получение информации о погоде в городе по названию
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

function getCitiesNeighbors(coordinatesOfCity, quantity) {  // получение информации о погоде в городах соседних с заданными координатами
    return fetch("http://api.openweathermap.org/data/2.5/find?lat=" + coordinatesOfCity.lat + "&lon=" + coordinatesOfCity.lon + "&cnt=" + quantity + "&units=metric&appid=" + APPID).then(
        response => {
        if ( response.status == 200) {
            return response.json();
        } else {
            throw new Error(response.statusText);
            }
        }
        ).catch(
            error => {
            throw new Error(error.statusText);
            }
        );
}

function getIndexMaxTemp(arrTemp) {
    let max = arrTemp[0];
    let j = 0;
    for ( let i = 1; i < arrTemp.length; i++) {
        if ( arrTemp[i] > max) {
            max = arrTemp[i];
            j = i;
        }
    }

    return  j + 1;
}


function getWether(city) {
    getCityJson(city).then( // получить город по названию
        cityJson => {
            let coordinatesOfCity = {
                lon: cityJson.coord.lon,
                lat: cityJson.coord.lat
            };

            return coordinatesOfCity;
        }
    ).then (    // получить соседние города
        coordinatesOfCity => {
            let quantity = 5;

            return getCitiesNeighbors(coordinatesOfCity, quantity + 1);
        }
    ).then( // найти максимальную температуру
        citiesJson => {
            let arrTemp = [];
            for( let i = 1; i < citiesJson.list.length; i++) {
                arrTemp.push(citiesJson.list[i].main.temp);
            }

            let index = getIndexMaxTemp(arrTemp);
            let maxTemp = citiesJson.list[index].main.temp;
            let cityTemp = citiesJson.list[0].main.temp; // citiesJson.list[0].main.temp - исходный город

            if ( maxTemp > cityTemp ) {
                let difference = maxTemp - cityTemp;
                alert("В городе " + citiesJson.list[index].name + " температура " + (maxTemp).toFixed(1) + ". Это на " + difference + "C теплее, чем в " + city);
            } else {
                alert("В городе " + city + " теплее, чем в 5 ближайших городах");
            }
        }
    ).catch(
        error => {
        throw new Error(error.statusText);
        }
    );

}

let city = prompt("Your city","Moscow");
getWether(city);
