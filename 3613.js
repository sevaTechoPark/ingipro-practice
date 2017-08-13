//Мы описали пользователя mike и всех его друзей в формате JSON:
    var mike = {
        friends: [{
            name: 'Anna',
            avatar: {
                url: 'http://some/url/to/avatar'
            }
        }]
    }
// Вам необходимо получить аватар первого друга mike .
// Если друзей нет или они не загрузили своё фото, то нужно вернуть 'http://default/url/to/avatar'

function getAvatar(user) {
    var urlAvatar;
    if ( "friends" in user == false || user.friends[0].avatar === undefined || user.friends[0].avatar.url === undefined){
        urlAvatar = 'http://default/url/to/avatar';
    }
    else {
        urlAvatar =  user.friends[0].avatar.url ;
    }

    return urlAvatar;
}

console.log(getAvatar(mike));