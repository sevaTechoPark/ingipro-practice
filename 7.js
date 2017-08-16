// Напишите фукнцию сортировки sortLibrary массива объектов.
// Аргументы функции:
// library - массив объектов
// field_name - ключ, по которому нужно отсортировать
// reverse - порядок сортировки. Если true - по убыванию, false - по возрастанию
// initial - функция преобразования значения, соответствующего ключу. Если передана, сортировка будет по значению
// initial(value)

const library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        libraryID: 1254
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];

console.log(sortLibrary(library, 'libraryID', true, parseInt));


function sortLibrary(library, field_name, reverse, initial) {
    if ( library.length <= 1)   // пустой массив
        return;

    if ( initial === undefined ) {  // функция преобразования значения отсутствует
        initial = function (value) {
            return value;
        }
    }

    for ( let i = 0 ; i < library.length; i++) {    // пузырьковая сортировка по убыванию
        for ( let j = 0; j < library.length; j++) {
                if ( initial(library[i][field_name]) >= initial(library[j][field_name]) ) {
                    let tmp = library[j];
                    library[j] = library[i];
                    library[i] = tmp;
                }

        }
    }

    if ( reverse == false) {    // порядок сортирвки по возрастания
        library.reverse();
    }

    return library;
}

/*
    [
        {
           title: 'Steve Jobs',
           author: 'Walter Isaacson',
           libraryID: 4264
        },
        {
           title: 'Mockingjay: The Final Book of The Hunger Games',
           author: 'Suzanne Collins',
           libraryID: 3245
       },
       {
           title: 'Bill Gates',
           author: 'The Road Ahead',
           libraryID: 1254
       }
    ]
*/
