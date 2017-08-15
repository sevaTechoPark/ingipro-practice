// Написать функцию, которая вернет новый объект, у которого ключи стали значениями, а значения ключами

console.log(invert_key_value({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
// {#00FF00: "green", #FF0000: "red", #FFFFFF: "white"}

function invert_key_value(obj) {
    let reverseObject = {};
    for (let key in obj) {
        reverseObject[obj[key]] = key;
    }

    return reverseObject;
}
