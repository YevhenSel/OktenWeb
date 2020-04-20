//
// - создать массив с 20 числами.
// number = [54, 615, 80, 1, 889, 12, 96, 5, 70, 32, 47, 87, 475, 25, 77, 65, 147, 852, 654, 456];
// -- при помощи метода sort отсортировать массив.

// console.log(number.sort());

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// let sort = number.sort(function (a, b) {
//     return b - a;
// });
// console.log(sort);

// -- при помощи filter получить числа кратные 3

// let number3 = number.filter(function (num) {
//     return num % 3 === 0;
// });
// console.log(number3);

// -- при помощи filter получить числа кратные 10

// let number10 = number.filter(function (num) {
//     return num % 10 === 0;
// });
// console.log(number10);

// -- перебрать (проитерировать) массив при помощи foreach()

// number.forEach(function (numFor) {
//     console.log(numFor);
// });

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let number3Map = number.map(function (num) {
//     return num * 3;
// });
// console.log(number3Map);

// - создать массив со словами на 15-20 элементов.
// word = ['dog', 'cat', 'car', 'mother', 'smile', 'love', 'hush', 'mist', 'aurora', 'faith', 'naive', 'pure', 'work', 'week', 'cold', 'little', 'big', 'success', 'guilt', 'galaxy'];
// -- отсортировать его по алфавиту в восходящем порядке.

// console.log(word.sort());

// -- отсортировать его по алфавиту  в нисходящем порядке.

// let sortWord = word.sort(function (a, b) {
//     if (a < b){
//         return 1;
//     }
//     if (a > b){
//         return -1;
//     }
// });
// console.log(sortWord);

// -- отфильтровать слова длиной менее 4х символов

// let strings4 = word.filter(value => value.length < 4);
// console.log(strings4);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let stringsMap = word.map(function (string) {
//     return string + '!';
// });
// console.log(stringsMap);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//     let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
//     ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)

// let userSortAge = users.sort((user1, user2) => user1.age - user2.age);
// console.log(userSortAge);
//
// let userSortAge1 = users.sort((user1, user2) => user2.age - user1.age);
// console.log(userSortAge1);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let userSortName = users.sort((a, b) => a.name.length - b.name.length);
// console.log(userSortName);
//
// let userSortName1 = users.sort((a, b) => b.name.length - a.name.length);
// console.log(userSortName1);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

// let peoples = users.map((user, index) => {
//     user.id = index;
//     return user;
// });
// console.log(peoples);

// - відсортувати його за індентифікатором
//
// let idishka = peoples.sort((a, b) => a.id - b.id);
// console.log(idishka);
//
// -- написать функцию калькулятора с 2мя числами и колбеком

// function calculate(a, b, callback) {
//     console.log(callback(a, b));
//
// }
// calculate(5, 7, function (a, b) {
//     return a * b;
//
// });

// -- написать функцию калькулятора с 3мя числами и колбеком

// function calculate3(a, b, c, callback) {
//     console.log(callback(a, b, c));
//
// }
// calculate3(2, 3, 5, function (a, b, c) {
//     return a + b * c;
//
// });

//
// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
// let cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 4,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume: 4,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів

// let filter1 = cars.filter(value => value.volume > 3);
// console.log(filter1);

// - двигун = 2л

// let filter2 = cars.filter(value => value.volume === 2);
// console.log(filter2);

// - виробник мерс

// let filter3 = cars.filter(value => value.producer === 'mercedes');
// console.log(filter3);

// - двигун більше 3х літрів + виробник мерседес

// let filter4 = cars.filter(value => value.volume > 3 && value.producer === 'mercedes);
// console.log(filter4);

// - двигун більше 3х літрів + виробник субару

// let filter5 = cars.filter(value => value.volume > 3 && value.producer === 'subaru');
// console.log(filter5);

// - сили більше ніж 300

// let filter6 = cars.filter(value => value.power > 300);
// console.log(filter6);

// - сили більше ніж 300 + виробник субару

// let filter7 = cars.filter(value => value.power > 300 && value.producer === 'subaru');
// console.log(filter7);

// - мотор серіі ej

// let filter8 = cars.filter(value => value.engine.startsWith('ej'));
// console.log(filter8);

// - сили більше ніж 300 + виробник субару + мотор серіі ej

// let filter9 = cars.filter(value => value.power > 300 && value.producer === 'subaru' && value.engine.startsWith('ej'));
// console.log(filter9);

// - двигун меньше 3х літрів + виробник мерседес

// let filter10 = cars.filter(value => value.volume > 3 && value.producer === 'mercedes');
// console.log(filter10);

// - двигун більше 2л + сили більше 250

// let filter11 = cars.filter(value => value.volume > 2 && value.power > 250);
// console.log(filter11);

// - сили більше 250  + виробник бмв

// let filter12 = cars.filter(value => value.power > 250 && value.producer === 'bmw');
// console.log(filter12);

//
// - взять слдующий массив
let usersWithAddress = [
{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
{id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
{id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
{id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
{id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
{id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
{id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
{id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
{id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
{id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
{id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
];
// -- отсортировать его по id пользователей

// let sort1 = usersWithAddress.sort((a, b) => a.id - b.id );
// console.log(sort1);

// -- отсортировать его по id пользователей в обратном опрядке

// let sort2 = usersWithAddress.sort((a, b) => b.id - a.id);
// console.log(sort2);

// -- отсортировать его по возрасту пользователей

// let sort3 = usersWithAddress.sort((a, b) => a.age - b.age);
// console.log(sort3);

// -- отсортировать его по возрасту пользователей в обратном порядке

// let sort4 = usersWithAddress.sort((a, b) => b.age - a.age);
// console.log(sort4);

// -- отсортировать его по имени пользователей

// let sort5 = usersWithAddress.sort((user1, user2) => user1.name > user2.name ? 1 : -1);
// console.log(sort5);

// -- отсортировать его по имени пользователей в обратном порядке

// let sort6 = usersWithAddress.sort((user1, user2) => user1.name < user2.name ? 1 : -1);
// console.log(sort6);

// -- отсортировать его по названию улицы  в алфавитном порядке

// let sort7 = usersWithAddress.sort((user1, user2) =>
//     user1.address.street > user2.address.street
//         ? 1
//         : -1
// );
// console.log(sort7);

// -- отсортировать его по номеру дома по возрастанию

// let sort8 = usersWithAddress.sort((user1, user2) =>
//     user1.address.number > user2.address.number
//         ? 1
//         : -1
// );
// console.log(sort8);

// -- отфильтровать (оставить) тех кто младше 30

// let filter20 = usersWithAddress.filter(value => value.age < 30);
// console.log(filter20);

// -- отфильтровать (оставить) тех у кого отрицательный статус

// let filter21 = usersWithAddress.filter(value => value.status === false);
// console.log(filter21);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

// let filter22 = usersWithAddress.filter(value => value.status === false && value.age < 30);
// console.log(filter22);

// -- отфильтровать (оставить) тех у кого номер дома четный

// let filter23 = usersWithAddress.filter(value => value.address.number % 2 === 0);
// console.log(filter23);

//
//
// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.


let car0 = {model: 'Gylia', power: 500, user: {name: 'Alex', age: 33, experience: 9,}, sale: 120000, year: 2018};
let car1 = {model: 'Accord', power: 220, user: {name: 'Yevhen', age: 27, experience: 7,}, sale: 10000, year: 2010};
let car2 = {model: 'CX-7', power: 230, user: {name: 'Max', age: 37, experience: 5,}, sale: 12000, year: 2015};
let car3 = {model: 'Civic', power: 180, user: {name: 'German', age: 30, experience: 8,}, sale: 9000, year: 2009};
let car4 = {model: 'Outlender', power: 190, user: {name: 'Kristina', age: 28, experience: 1,}, sale: 11000, year: 2006};
let car5 = {model: 'CH-R', power: 240, user: {name: 'Ira', age: 29, experience: 3,}, sale: 15000, year: 2019};
let car6 = {model: 'Rio', power: 150, user: {name: 'Igor', age: 38, experience: 15,}, sale: 11500, year: 2008};
let car7 = {model: 'GLS', power: 390, user: {name: 'Nik', age: 40, experience: 14,}, sale: 150000, year: 2020};
let car8 = {model: 'X7', power: 380, user: {name: 'Bob', age: 45, experience: 20,}, sale: 55000, year: 2019};
let car9 = {model: 'SantaFe', power: 200, user: {name: 'Archi', age: 30, experience: 2}, sale: 16000, year: 2007};

//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
car0.power = Math.floor(car0.power * 1.1);
car1.power = Math.floor(car1.power * 1.1);
car2.power = Math.floor(car2.power * 1.1);
car3.power = Math.floor(car3.power * 1.1);
car4.power = Math.floor(car4.power * 1.1);
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
car0.user.name = 'Grigoriy';
car1.user.name = 'Marfa';
car2.user.name = 'Ignat';
car3.user.name = 'Mevorik';
car4.user.name = 'Alena';

// Для початку вкладіть всі наші створені автомобілі в масив cars.
// let cars = [car0, car1, car2, car3, car4, car5, car6, car7, car8, car9];
//     Далі необхідно дати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%

// for (let i = 0; i < cars.length; i += 2) {
//     cars[i].power = Math.floor(cars[i].power * 1.1);
//     cars[i].sale = Math.floor(cars[i].sale * 1.05);
//     console.log(cars[i]);
//
// }

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.

// for (let i = 0; i < cars.length; i++) {
//     if (cars[i].user.experience < 5 && cars[i].user.age > 25) {
//         cars[i].user.experience++;
//     }
// }
// console.log(cars);

//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
// let sum = 0;
// for (let i = 0; i < cars.length; i++) {
//     sum = sum + cars[i].sale;
// }
// console.log(sum);
//
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

function indexMinMax(array, index) {
    let min = null;
    let max = null;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === index) {
            if (!min) min = i;
            max = i;
        }
    }
// min
    console.log(`Answer: MinIndex = ${min}, MaxIndex = ${max}.`)
    // :console.log(-1)

}
indexMinMax(arr, 4);