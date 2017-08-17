//Решить вторую задачу, используя async/await (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/async_function)

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
    ).catch(
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


async function getWether(city) {

    const cityJson = await getCityJson(city); // получить город по названию
    let coordinatesOfCity = {
                            lon: cityJson.coord.lon,
                            lat: cityJson.coord.lat
                            };

    let quantity = 5;
    const citiesJson = await getCitiesNeighbors(coordinatesOfCity, quantity + 1);   // получить соседние города
    let arrTemp = [];
    for( let i = 1; i < citiesJson.list.length; i++) {
        arrTemp.push(citiesJson.list[i].main.temp);
    }
    let index = getIndexMaxTemp(arrTemp);   // найти максимальную температуру
    let maxTemp = citiesJson.list[index].main.temp;
    let cityTemp = citiesJson.list[0].main.temp; // citiesJson.list[0].main.temp - исходный город

    if ( maxTemp > cityTemp ) {
        let difference = maxTemp - cityTemp;
        alert("В городе " + citiesJson.list[index].name + " температура " + (maxTemp).toFixed(1) + ". Это на " + difference + "C теплее, чем в " + city);
    } else {
        alert("В городе " + city + " теплее, чем в 5 ближайших городах");
    }

}

let city = prompt("Your city","Moscow");
getWether(city);

//git checkout -b pack3/4 && git add 4.js && git commit -m "pack 3/task 3 index.html change src from pack 3/task 1" && git push --set-upstream origin pack3/4 && git checkout master