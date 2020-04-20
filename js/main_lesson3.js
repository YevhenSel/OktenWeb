// 1 - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

// let dog = {
//     name: 'bob',
//     age: 5,
//     color: 'white',
// };
// let car = {
//     company: 'honda',
//     model: 'accord',
//     status: true
// };
// let man = {
//     height: 1.9,
//     wife: true,
//     hobi: 'football'
// };
// let book = {
//     avtor: 'Pushkin',
//     pages: 482,
//     style: 'roman'
// };
// let pc = {
//     processor: 'intel',
//     ram: 'hyperx',
//     gpu: 'rtx2080'
// };

// 2 - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

// let user1 = {
//     name: 'Dima',
//     age: 35,
//     email: ['Sincere@april.biz', 'Shanna@melissa.tv', 'Nathan@yesenia.net'],
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874'
//     }
// };
// let user2 = {
//     phone: '1-463-123-4447',
//     website: ['ramiro.info', 'sport.ua', 'lostfilm.tv'],
//     company: {
//         name: 'Romaguera-Jacobson',
//         catchPhrase: 'Face to face bifurcated interface',
//         bs: 'e-enable strategic applications'
//     }
// };
// let user3 = {
//     username: 'Karianne',
//     cars: ['bmw', 'mercedes-benz', 'honda'],
//     jobs: {
//         first: 'taxi',
//         second: 'drivers'
//     }
// };
// let superCar = {
//     speed: '330',
//     engine: {
//         volume: ['7.2', '8.0', '9.6'],
//         type: ['v8', 'v10', 'v12']
//     }
// };
// let desktop = {
//     os: {
//         Windows: ['7', '8', '8.1', '10'],
//         Linux: ['Ubuntu', 'Kali']
//     },
//     cpu: 'amd',
//     display: '15.6',
//     matrix: 'ips'
// };

// 3 - При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for (const dogKey in dog) {
//     console.log(dogKey);
// }
// for (const carKey in car) {
//     console.log(carKey);
// }
// for (const manKey in man) {
//     console.log(manKey);
// }
// for (const bookKey in book) {
//     console.log(bookKey);
// }
// for (const pcKey in pc) {
//     console.log(pcKey);
// }
//
// for (const user1Key in user1) {
//     console.log(user1Key);
// }
// for (const user2Key in user2) {
//     console.log(user2Key);
// }
// for (const user3Key in user3) {
//     console.log(user3Key);
// }
// for (const superCarKey in superCar) {
//     console.log(superCarKey);
// }
// for (const desktopKey in desktop) {
//     console.log(desktopKey);
// }

// 4 - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// let keysDog = Object.keys(dog);
// console.log(keysDog);
// let keysCar = Object.keys(car);
// console.log(keysCar);
// let keysMan = Object.keys(man);
// console.log(keysMan);
// let keysBook = Object.keys(book);
// console.log(keysBook);
// let keysPC = Object.keys(pc);
// console.log(keysPC);
//
// let keysUser1 = Object.keys(user1);
// console.log(keysUser1);
// let keysUser2 = Object.keys(user2);
// console.log(keysUser2);
// let keysUser3 = Object.keys(user3);
// console.log(keysUser3);
// let keysSuperCar = Object.keys(superCar);
// console.log(keysSuperCar);
// let keysDesktop = Object.keys(desktop);
// console.log(keysDesktop);

// 5 - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

// cars = [
//     {
//         model: 'Accord',
//         year: 2010,
//         color: 'black'
//     },
//     {
//         model: 'CX-7',
//         year: 2015,
//         color: 'white'
//     },
//     {
//         model: 'Civic',
//         year: 2009,
//         color: 'yellow'
//     },
//     {
//         model: 'Outlender',
//         year: 2006,
//         color: 'silver'
//     },
//     {
//         model: 'CH-R',
//         year: 2019,
//         color: 'orange'
//     },
//     {
//         model: 'Rio',
//         year: 2008,
//         color: 'red'
//     },
//     {
//         model: 'GLS',
//         year: 2020,
//         color: 'white'
//     },
//     {
//         model: 'X7',
//         year: 2019,
//         color: 'brown'
//     },
//     {
//         model: 'SantaFe',
//         year: 2007,
//         color: 'blue'
//     },
//     {
//         model: 'Gylia',
//         year: 2018,
//         color: 'pink'
//     }
// ];

// 6 - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

// cities = [
//     {
//         name: 'Bergamo',
//         population: 200254,
//         country: 'Italy',
//         region: 'Lombardia'
//     },
//     {
//         name: 'Alicante',
//         population: 145114,
//         country: 'Spain',
//         region: 'Valencia'
//     },
//     {
//         name: 'Everton',
//         population: 1250644,
//         country: 'Great_Britain',
//         region: 'Liverpool'
//     },
//     {
//         name: 'Bern',
//         population: 3245254,
//         country: 'Switzerland',
//         region: 'Bern'
//     },
//     {
//         name: 'Hessen',
//         population: 6254154,
//         country: 'Germany',
//         region: 'Wiesbaden'
//     }
// ];

// 7 - Создать массив объектов cars1 и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

// cars1 = [
//     {
//         model: 'LaFerrari',
//         year: 2013,
//         power: '800',
//         color: 'red',
//         driver: {
//             name: 'Filippo',
//             age: 35,
//             sex: 'male',
//             experience: 10
//         }
//     },
//     {
//         model: 'Focus',
//         year: 2006,
//         power: '200',
//         color: 'silver',
//         driver: {
//             name: 'Max',
//             age: 40,
//             sex: 'male',
//             experience: 7
//         }
//     },
//     {
//         model: 'Aventador',
//         year: 2011,
//         power: '700',
//         color: 'yellow',
//         driver: {
//             name: 'Musio',
//             age: 27,
//             sex: 'male',
//             experience: 8
//         }
//     },
//     {
//         model: 'Model_S',
//         year: 2009,
//         power: '400',
//         color: 'white',
//         driver: {
//             name: 'Alis',
//             age: 28,
//             sex: 'female',
//             experience: 9
//         }
//     },
//     {
//         model: 'Cayenne',
//         year: 2002,
//         power: '500',
//         color: 'blue',
//         driver: {
//             name: 'Katy',
//             age: 25,
//             sex: 'female',
//             experience: 3
//         }
//     },
// ];


// 8 - проитерировать каждый массив из задания 5,6,7 при помощи while.

// let i = 0;
// while (i < cars.length) {
//     console.log(cars[i]);
//     i++
// }
// let j = 0;
// while (j < cities.length) {
//     console.log(cities[j]);
//     j++
// }
// let k = 0;
// while (k < cars1.length) {
//     console.log(cars1[k]);
//     k++
// }

// 9 - проитерировать каждый массив из задания 5,6,7 при помощи for .

// for (let l = 0; l < cars.length; l++) {
//     console.log(cars[l]);
// }
// for (let h = 0; h < cities.length; h++) {
//     console.log(cities[h]);
// }
// for (let d = 0; d < cars1.length; d++) {
//     console.log(cars1[d]);
// }

// 10 - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for (const car of cars) {
//     console.log(car);
// }
// for (const city of cities) {
//     console.log(city);
// }
// for (const car1 of cars1) {
//     console.log(car1);
// }

// 11 - взять объекты из задания 1 и превратить каждый в json.

// let dogJ = JSON.stringify(dog);
// console.log(dogJ);
// let carJ = JSON.stringify(car);
// console.log(carJ);
// let manJ = JSON.stringify(man);
// console.log(manJ);
// let bookJ = JSON.stringify(book);
// console.log(bookJ);
// let pcJ = JSON.stringify(pc);
// console.log(pcJ);

// 12 - взять json из задания 11 и превратить их обратно в объекты.

// let dogP = JSON.parse(dogJ);
// console.log(dogP);
// let carP = JSON.parse(carJ);
// console.log(carP);
// let manP = JSON.parse(manJ);
// console.log(manP);
// let bookP = JSON.parse(bookJ);
// console.log(bookP);
// let pcP = JSON.parse(pcJ);
// console.log(pcP);

// 13 - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// for (const carJSON of cars) {
//     let carString = JSON.stringify(carJSON);
//     console.log(carString);
// }

// 14 - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// for (const cityJSON of cities) {
//     let cityString = JSON.stringify(cityJSON);
//     console.log(cityString);
// }

// 15 - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let newArray = [];
// for (const cars1Element of cars1) {
//     let cars1String = JSON.stringify(cars1Element);
//     newArray.push(cars1String);
// }
// console.log(newArray);

// 16 - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// let people = [
//     {name: 'vasya', age: 31, skills: ['java', 'js']},
//     {name: 'petya', age: 30, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, skills: ['mysql', 'mongo']},
//     {name: 'olya', age: 28, skills: ['java', 'js']},
//     {name: 'max', age: 30, skills: ['mysql', 'mongo']}
// ];
// for (const human of people) {
//     for (const skill of human.skills) {
//         console.log(skill);
//     }
// }

// 17 - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

// let people1 = [
//     {name: 'vasya', age: 31, skills: ['java', 'js']},
//     {name: 'petya', age: 30, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, skills: ['mysql', 'mongo']},
//     {name: 'olya', age: 28, skills: ['java', 'js']},
//     {name: 'max', age: 30, skills: ['mysql', 'mongo']}
// ];
// let men = [];
// for (const people1Element of people1) {
//     for (const skillElement of people1Element.skills) {
//         men.push(skillElement);
//     }
// }
// console.log(men);

// 18 - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [
// {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
// {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
// {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
// {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
// {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
// ];
// for (const user of users) {
//     for (const skill of user.skills) {
//         console.log(skill);
//     }
// };



let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let adressArray = [];
// for (const user of users) {
//     adressArray.push(user.address)
// }
// console.log(adressArray);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// let divElement = document.createElement("div");
// for (const user of users) {
//     const yen = document.createElement('div');
//     yen.innerText = `${user.name} ${user.age} ${user.status}`;
//     divElement.appendChild(yen);
//     document.body.appendChild(divElement);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// let divEl = document.createElement("div");
// for (const user of users) {
//     const div = document.createElement("div");
//     const name = document.createElement('div');
//     const age = document.createElement('div');
//     const status = document.createElement('div');
//     const address = document.createElement('div');
//     name.innerHTML = user.name;
//     age.innerHTML = user.age;
//     status.innerHTML = user.status;
//     address.innerHTML = user.address.city;
//     divEl.appendChild(div);
//     div.appendChild(name);
//     div.appendChild(age);
//     div.appendChild(status);
//     div.appendChild(address);
//     document.body.appendChild(divEl);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// let divEl = document.createElement("div");
// for (const user of users) {
//     const div = document.createElement("div");
//     const name = document.createElement('div');
//     const age = document.createElement('div');
//     const status = document.createElement('div');
//     const address = document.createElement('div');
//     const city = document.createElement('div');
//     const country = document.createElement('div');
//     const street = document.createElement('div');
//     const houseNumber = document.createElement('div');
//     name.innerHTML = user.name;
//     age.innerHTML = user.age;
//     status.innerHTML = user.status;
//     city.innerHTML = user.address.city;
//     country.innerHTML = user.address.country;
//     street.innerHTML = user.address.street;
//     houseNumber.innerHTML = user.address.houseNumber;
//     divEl.appendChild(div);
//     div.appendChild(name);
//     div.appendChild(age);
//     div.appendChild(status);
//     div.appendChild(address);
//     address.appendChild(city);
//     address.appendChild(country);
//     address.appendChild(street);
//     address.appendChild(houseNumber);
//     document.body.appendChild(divEl);
// }


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},
// ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},
// ];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

// for (const user of usersWithId) {
//     for (const citi of citiesWithId) {
//         if (user.id === citi.user_id) {
//             user.address = citi;
//         }
//     }
// }
// console.log(usersWithId);

// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

// let divka = document.createElement("div");
// let divka2 = document.createElement("div");
// let peshka = document.createElement("p");
// divka.id = 'divka';
// divka2.className = 'divka2';
// peshka.innerText = 'Hello Ilon Mask';
// document.body.appendChild(divka);
// divka.appendChild(divka2);
// divka2.appendChild(peshka);
// let divkaElement = document.getElementById('divka');
// console.log(divka.innerText);
// let divka2Element = document.getElementsByClassName('divka2');
// for (const divki of divka2Element) {
//     console.log(divki.innerText);
// }
// let peshechka = document.getElementsByTagName('p');
// for (const pElement of peshechka) {
//     console.log(pElement.innerText);
// }

// - змінити цей текст використовуючи селектори id, class,  tag

// divka.innerText = 'OktenWeb';
// divka2.innerText = 'OktenWeb';
// peshka.innerText = 'OktenWeb';

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// divka.style.height = '500px';
// divka.style.width = '500px';
// divka2.style.height = '500px';
// divka2.style.width = '500px';
// divka.style.height = '500px';
// divka.style.width = '500px';

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

// let table = document.createElement("table");
// let th = document.createElement('th');
// let td = document.createElement('td');
// let td2 = document.createElement('td');
// let td3 = document.createElement('td');
// document.body.appendChild(table);
// table.appendChild(th);
// th.appendChild(td);
// th.appendChild(td2);
// th.appendChild(td3);

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

// let table = document.createElement("table");
// for (let i = 0; i < 10; i++) {
//     const tr = document.createElement("tr");
//     for (let j = 0; j < 3; j++) {
//         const td = document.createElement("td");
//         tr.appendChild(td);
//     }
//     table.appendChild(tr)
// }
// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

// let table = document.createElement("table");
// for (let i = 0; i < 10; i++) {
//     const tr = document.createElement("tr");
//     for (let j = 0; j < 5; j++) {
//         const td = document.createElement("td");
//         tr.appendChild(td);
//     }
//     table.appendChild(tr)
// }
// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// let table = document.createElement("table");
// let n = +prompt('enter number');
// let m = +prompt('enter number');
// for (let i = 0; i < n; i++) {
//     const tr = document.createElement("tr");
//     for (let j = 0; j < m; j++) {
//         const td = document.createElement("td");
//         tr.appendChild(td);
//     }
//     table.appendChild(tr)
// }
// document.body.appendChild(table);

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають id
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
// - знайти всі div та змінити ім колір на червоний

// let allTag = document.getElementsByTagName('*');
// for (const allTagElement of allTag) {
//     if (allTagElement.getAttribute('id')) {
//         console.log(allTagElement);
//     }
// }
// let allTagP = document.getElementsByTagName('p');
// for (const arrayP of allTagP) {
//     arrayP.innerText = 'oktenweb';
//     console.log(arrayP);
// }
// let allTagDiv = document.getElementsByTagName('div');
// for (const arrayDiv of allTagDiv) {
//     arrayDiv.style.backgroundColor = 'red';
//     console.log(arrayDiv);
// }


// ============
// ====class===
// ============
//
//     - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// let allTagH2 = document.getElementsByTagName('h2');
// let content = document.getElementById('content');
// let ul = document.createElement('ul');
// for (const h2 of allTagH2) {
//     let li = document.createElement('li');
//     li.innerText = h2.innerText;
//     ul.appendChild(li);
// }
// content.appendChild(ul);

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// //todo add rules
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];

// let wrap = document.createElement("div");
// wrap.id = 'wrap';
// for (let i = 0; i < rules.length; i++) {
//     const rule = rules[i];
//     let div = document.createElement("div");
//     let h2 = document.createElement("h2");
//     let p = document.createElement("p");
//     div.className = 'rules rules${i}';
//     h2.innerText = rule.title;
//     p.innerText = rule.body;
//     div.appendChild(h2);
//     div.appendChild(p);
//     wrap.appendChild(div);
// }
// document.body.appendChild(wrap);

//
//
//
//
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту