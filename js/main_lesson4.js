// - створити функцію яка виводить масив

// function arr(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// arr([4,5,6,4,5,6]);

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

// function randomArray(random, min, max) {
//     let arrayRandom = [];
//     for (let i = 0; i < random; i++) {
//         arrayRandom.push(Math.floor(Math.random()*(max-min)+min));
//
//     }
//     arr(arrayRandom)
// }
// randomArray(10, 10, 50);


// - створити функцію яка приймає три числа та виводить та повертає найменьше.

// function minNumber(a, b, c) {
//     let min;
//     a < b ? min=a : min=b;
//     min > c ? min=c : null;
//     console.log(min);
//     return min;
// }
// console.log(minNumber(10, 5, 7));

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// function maxNumber(a, b, c) {
//     let max;
//     a > b ? max=a : max=b;
//     max < c ? max=c : null;
//     console.log(max);
//     return max;
// }
// console.log(maxNumber(10, 5, 7));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function minMaxNumber() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const target of arguments) {
//         if (target > max) max = target;
//         if (target < min) min = target;
//     }
//     console.log(max);
//     return min;
// }
// console.log(minMaxNumber(10, 52, 48, 95, 1, 2, 999));

// - створити функцію яка виводить масив

// function arr(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// arr([4,5,6,4,5,6]);

// - створити функцію яка повертає найбільше число з масиву

// function numberMax(array) {
//     let max = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement > max) max = arrayElement;
//     }
//     return max;
// }
// let numbers = [6,7,5,6,4,3];
// const pon = numberMax(numbers);
// console.log(pon);

// - створити функцію яка повертає найменьше число з масиву

// function numberMax(array) {
//     let max = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement < max) max = arrayElement;
//     }
//     return max;
// }
// let numbers = [9,8,7,4.5,77,1];
// const pon = numberMax(numbers);
// console.log(pon);

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// function summaNumbers(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum = sum + array[i];
//     }
//     return sum;
// }
// let numbers = [5,5,5,5,5,1,2,3];
// const pon = summaNumbers(numbers);
// console.log(pon);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function arifmet(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum = sum + array[i];
//     }
//     return sum / array.length;
// }
// let numbers = [7,7,7,7,7];
// const pon = arifmet(numbers);
// console.log(pon);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

// function objectArray(obj) {
//     let one = 0;
//     for (const objElement of obj) {
//         if (typeof objElement === 'object') {
//             one++;
//         }
//     }
//     return one;
// }
// let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				}
// ];
// console.log(objectArray(rules));

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

// function arr(array) {
//     let pole = 0;
//     for (const arrayElement of array) {
//         if (typeof arrayElement === 'object') {
//             for (const arrayElementKey in arrayElement) {
//                 pole++;
//             }
//         }
//     }
//     return pole;
// }
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     }
// ];
// console.log(arr(rules));

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// 	Приклад
// 	[1,2,3,4]
// 	[2,3,4,5]
// результат
// 	[3,5,7,9]

// let array1 = [1,2,3,4];
// let array2 = [2,3,4,5];
// function newArray(arr1, arr2) {
//     let result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         result.push(arr1[i] + arr2[i]);
//     }
//     return result;
// }
//
// console.log(newArray(array1, array2));

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// function elements(array, index) {
//     if (index < array.length-1) {
//         const item = array[index];
//         array[index] = array[index+1];
//         array[index+1] = item;
//     }
//     return array;
// }
// let rules = [1,2,3,4,5,6,7,8,9];
// console.log(rules);
// console.log(elements(rules, 5));

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець масиву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// function zeroElement(array) {
//     let arr = [];
//     let zero = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 0) {
//             zero.push(array[i])
//         }else{
//             arr.push(array[i]);
//         }
//     }
//     return arr.concat(zero);
// }
// console.log(zeroElement([1,0,6,0,3]));
// console.log(zeroElement([0,1,2,3,4]));
// console.log(zeroElement([0,0,1,0]));

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// function bodyBlock(message) {
//     let divka = document.createElement('div');
//     divka.innerText = message || 'Hello owu';
//     document.body.appendChild(divka);
// }
// bodyBlock();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function typeElement(type, message) {
//     let item = document.createElement(type);
//     item.innerText = message;
//     document.body.appendChild(item);
// }
// typeElement('div', 'okten');

// - приймає масив автомобілів (можна взяти з попередніх дз ), та індентифікатор елементу в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в одному блоці

cars = [
    {
        model: 'Accord',
        year: 2010,
        color: 'black'
    },
    {
        model: 'CX-7',
        year: 2015,
        color: 'white'
    },
    {
        model: 'Civic',
        year: 2009,
        color: 'yellow'
    },
    {
        model: 'Outlender',
        year: 2006,
        color: 'silver'
    },
    {
        model: 'CH-R',
        year: 2019,
        color: 'orange'
    },
    {
        model: 'Rio',
        year: 2008,
        color: 'red'
    },
    {
        model: 'GLS',
        year: 2020,
        color: 'white'
    },
    {
        model: 'X7',
        year: 2019,
        color: 'brown'
    },
    {
        model: 'SantaFe',
        year: 2007,
        color: 'blue'
    },
    {
        model: 'Gylia',
        year: 2018,
        color: 'pink'
    }
];
function carsArray(array, id) {
    let carsId = document.getElementById(id);
    for (const arrayElement of array) {
        let divkaCars = document.createElement('div');
        divkaCars.innerText = Object.values(arrayElement);
        carsId.appendChild(divkaCars);
    }
}
carsArray(cars, 'fuCars');

// - приймає масив автомобілів (можна взяти з попередніх дз ), та індентифікатор елементу в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
//
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [
//             {id: 1, name: 'vasya', age: 31, status: false},
//             {id: 2, name: 'petya', age: 30, status: true},
//             {id: 3, name: 'kolya', age: 29, status: true},
//             {id: 4, name: 'olya', age: 28, status: false},
//             ];
//             let citiesWithId = [
//             {user_id: 3, country: 'USA', city: 'Portland'},
//             {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//             {user_id: 2, country: 'Poland', city: 'Krakow'},
//             {user_id: 4, country: 'USA', city: 'Miami'},
//             ];
// Частковий приклад реультату:
//
//
//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// //todo add rules
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
// "
//
//
//
//
//
