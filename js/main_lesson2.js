// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

// let fiveNumbers  = [5, 42, 87, 896, 1];
// let fiveString = ['Hello', 'Ilon', 'Mask', 'from', 'Ukraine'];
// let massive = ['luky', 'man', 25, 89, true];


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let yoy = [];
// yoy[2] = 'okten';
// yoy[8] = 'web';
// yoy[11] = 89;
// console.log(yoy);

// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

// let dog = {
//     name: 'bob',
//     age: 5,
//     height: 0.5,
//     color: 'white',
//     paws: 4
// };
// let human = {
//     name: 'max',
//     age: 30,
//     height: 1.9,
//     wife: true,
//     hobi: 'football'
// };
// let car = {
//     company: 'honda',
//     model: 'accord',
//     color: 'black',
//     age: 5,
//     status: true
// };
// let apartment = {
//     company: 'kyivMiskBud',
//     porch: 2,
//     level: 5,
//     number: 78,
//     numberOfRooms: 3
// };
// let book = {
//     avtor: 'Pushkin',
//     name: 'Eugene_Onegin',
//     pages: 482,
//     age: 190,
//     style: 'roman'
// };

// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

// let dogs = [
//     {
//         name: 'bob',
//         age: 5,
//         height: 0.5,
//         color: 'white',
//         paws: 4
//     },
//     {
//         name: 'kali',
//         age: 4,
//         height: 0.4,
//         color: 'black',
//         paws: 4
//     },
//     {
//         name: 'alis',
//         age: 1,
//         height: 1.5,
//         color: 'yellow',
//         paws: 4
//     },
//     {
//         name: 'sharik',
//         age: 1,
//         height: 0.6,
//         color: 'white',
//         paws: 4
//     },
//     {
//         name: 'rud',
//         age: 7,
//         height: 1.5,
//         color: 'black',
//         paws: 4
//     }
// ];
// let person = [
//     {
//         name: 'max',
//         age: 30,
//         height: 1.9,
//         wife: true,
//         hobi: 'football'
//     },
//     {
//         name: 'oleg',
//         age: 20,
//         height: 1.8,
//         wife: true,
//         hobi: 'baseball'
//     },
//     {
//         name: 'alex',
//         age: 35,
//         height: 1.95,
//         wife: false,
//         hobi: 'skateboard'
//     },
//     {
//         name: 'andrey',
//         age: 25,
//         height: 1.7,
//         wife: true,
//         hobi: 'basketball'
//     },
//     {
//         name: 'ivan',
//         age: 40,
//         height: 1.85,
//         wife: true,
//         hobi: 'hokey'
//     }
// ];
// let cars = [
//     {
//         company: 'honda',
//         model: 'accord',
//         color: 'black',
//         age: 5,
//         status: true
//     },
//     {
//         company: 'honda',
//         model: 'civic',
//         color: 'white',
//         age: 2,
//         status: true
//     },
//     {
//         company: 'mazda',
//         model: 'cx-5',
//         color: 'green',
//         age: 1,
//         status: true
//     },
//     {
//         company: 'toyota',
//         model: 'camry',
//         color: 'brown',
//         age: 2,
//         status: true
//     },
//     {
//         company: 'bmw',
//         model: 'x5',
//         color: 'yellow',
//         age: 10,
//         status: true
//     }
// ];
// console.log(dogs, person, cars);

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

// let house = {
//     street: 'shevchenko',
//     number: 159,
//     color: ['white', 'black'],
//     levels: 3,
//     rooms: {
//         first: 'bedroom',
//         second: 'hall'
//     }
// };
// let driver = {
//     name: 'oleg',
//     age: 35,
//     experience: 15,
//     cars: ['bmw', 'mercedes-benz', 'honda'],
//     jobs: {
//         first: 'taxi',
//         second: 'drivers'
//     }
// };
// let toy = {
//     name: 'lol',
//     age: 1,
//     color: ['green', 'black', 'yellow'],
//     form_factor: 'cuckoo',
//     clothes: {
//         skirt: 2,
//         hat: 5,
//         dress: 3
//     }
// };
// let table = {
//     color: {
//         first: 'green',
//         second: 'yellow'
//     },
//     material: 'glass',
//     status: true,
//     dimensions: [0.5, 1.2, 2.5],
//     age: 5
// };
// let bag = {
//     color: ['silver', 'brown'],
//     age: 1,
//     material: 'leather',
//     status: 'girl',
//     dresscot: {
//         first: 'ball',
//         second: 'cafe'
//     }
// };

// Дан массив:
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// console.log(users[7].name);
// - статус Максима
// console.log(users[4].status);
// - ім'я передостаннього об'єкту
// console.log(users[users.length-1].name);
// - ім'я третього об'єкта
// console.log(users[2].name);
// - вік Олега
// console.log(users[6].age);
// - вік Олі
// console.log(users[3].age);
// - вік + ім'я 5го об'єкта
// let five1 = users[4].name;
// let five2 = users[4].age;
// console.log(five1, five2);
// - вік + сатус Анни
// let an1 = users[5].name;
// let an2 = users[5].age;
// console.log(an1, an2);
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!



// -Візьміть файл task2_template.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"

// let con1 = document.getElementById('content');
// console.log(con1.innerText);

// - отримує текст з блоку з id "rules"

// let con2 = document.getElementById("rules");
// console.log(con2.innerText);

// - замініть текст параграфа з id 'content' на будь-який інший

// con1.innerText = 'Hello World!!!';

// - замініть текст параграфа з id 'rules' на будь-який інший

// con2.innerText = 'Ilon Mask';

// - змініть кожному елементу колір фону на червоний

// con1.style.backgroundColor = 'red';
// con2.style.backgroundColor = 'red';

// - змініть кожному елементу колір тексту на синій

// con1.style.color = 'blue';
// con2.style.color = 'blue';

// - отримати весь список класів елемента з id=rules і вивести їх в console.log

// console.log(con2.classList);

// - отримати всі елементи з класом fc_rules

// let fc_rules_con = document.getElementsByClassName('fc_rules');
// console.log(fc_rules_con);

// - поміняти колір тексту у всіх елементів fc_rules на червоний

// for (const fcRulesConElement of fc_rules_con) {
//     fcRulesConElement.style.color = 'red';
// }

//
// ====================
// ====================
// ====================
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let number10 = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while

    // let owu = 0;
    // while (owu < number10.length) {
    //     console.log(number10[owu]);
    //     owu++
    // }

    ////9........

    // let owu11 = number10.length - 1;
    // while (owu11 >= 0) {
    //     console.log(number10[owu11]);
    //     owu11--
    // }

// 2. перебрати його циклом for

    // for (let okten = 0; okten < number10.length; okten++) {
    //     console.log(number10[okten]);
    // }

    ////9.............

    // for (let okten11 = number10.length - 1; okten11 >= 0; okten11--) {
    //     console.log(number10[okten11]);
    // }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

    // let owu1 = 1;
    // while (owu1 < number10.length) {
    //     console.log(number10[owu1]);
    //     owu1 += 2;
    // }

    ////9............

    // let owu12 = number10.length - 1;
    // while (owu12 >= 0) {
    //     console.log(number10[owu12]);
    //     owu12 -= 2;
    // }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

    // for (let okten1 = 1; okten1 < number10.length; okten1 += 2) {
    //     console.log(number10[okten1]);
    // }

    ////9.............

    // for (let okten121 = number10.length - 1; okten121 >= 1; okten121 -= 2) {
    //     console.log(number10[okten121]);
    // }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

    // let owu2 = 0;
    // while (owu2 < number10.length) {
    //     if (number10[owu2] % 2 === 0) {
    //         console.log(number10[owu2]);
    //     }
    //     owu2++
    // }

    ////9...........

    // let owu222 = number10.length-1;
    // while (owu222 >= 0) {
    //     if (number10[owu222] % 2 === 0) {
    //         console.log(number10[owu222]);
    //     }
    //     owu222--
    // }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

    // for (let okten2 = 0; okten2 < number10.length; okten2 += 2) {
    //     console.log(number10[okten2]);
    // }

    ////9..........

    // for (let okten22 = number10.length-1; okten22 >= 0; okten22--) {
    //     if (number10[okten22] % 2 === 0) {
    //         console.log(number10[okten22]);
    //     }
    // }

// 7. замінити кожне число кратне 3 на слово "okten"

    for (let i = 0; i < number10.length; i++) {
        if (number10[i] % 3 === 0) {
            number10[i] = 'okten';
            console.log(number10[i]);
        }
    }

    ////9............

    // for (let i = number10.length-1; i >= 0; i--) {
    //     if (number10[i] % 3 === 0){
    //         console.log(number10[i]);
    //     }
    // }

// 8. вивести масив в зворотньому порядку.

    // for (let ii = number10.length - 1; ii >= 0; ii--) {
    //     console.log(number10[ii]);
    // }


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

    //^^^ все в заданиях с цыфрой '9';

// 10
// створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.

let ray = [];

// for (let ia = 0, pup = 2; ia < 50; ia++, pup += 2) {
//     ray[ia] = pup;
//     console.log(ray[ia]);
// }


// - заповнити його 50 непарними числами за допомоги циклу.

// for (let ia = 0, pup = 1; ia < 50; ia++, pup += 2) {
//     ray[ia] = pup;
//     console.log(ray[ia]);
// }


// 1
// створити пустий масив та :
let mus = [];
// 1. заповнити його 50 парними числами за допомоги циклу.

// for (let ia = 0, pup = 2; ia < 50; ia++, pup += 2) {
//     mus[ia] = pup;
//     console.log(mus[ia]);
// }

// 2. заповнити його 50 непарними числами за допомоги циклу.

// for (let ia = 0, pup = 1; ia < 50; ia++, pup += 2) {
//     mus[ia] = pup;
//     console.log(mus[ia]);
// }

// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)

// for (let ty = 0; ty < 87; ty++) {
//     mus[ty] = Math.floor(Math.random() * 20);
//     console.log(mus[ty]);
// }
// for (let we = 0; we < 59; we++) {
//     mus[we] = Math.floor(Math.random() * 724 + 8);
//     console.log(mus[we]);
// }

// 2. вывести на консоль  каждый третий елемент

// for (let we = 0; we < 59; we++) {
//     if (mus[we] % 3 === 0) {
//         console.log(mus[we]);
//     }
//
// }

// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.

// for (let we = 0; we < 59; we += 3) {
//     if (mus[we] % 2 === 0) {
//         console.log(mus[we]);
//     }
//
// }

// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.

// let sumir = [];
// for (let we = 0; we < 59; we += 3) {
//     if (mus[we] % 2 === 0) {
//         console.log(mus[we]);
//         sumir.push(mus[we]);
//     }
//
// }

// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный

// let mus1 = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < mus1.length; i++) {
//     if (mus1[i + 1] % 2 === 0) {
//         console.log(mus1[i]);
//     }
// }

// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.

// let byu = [100,250,50,168,120,345,188];
// let sum = 0;
// for (let i = 0; i < byu.length; i++) {
//     sum = sum + byu[i]
// }
// console.log(sum / byu.length);

// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let randomFive = [];
// for (let i = 0; i < mus.length; i++) {
//     mus[i] = mus[i] * 5;
//     randomFive.push(mus[i]);
//     console.log(randomFive);
// }

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.

// let array = ['hello', 22, 'word', 'okten', 879, 100, 987.25, 'owu', true];
// arrayNumber = [];
// for (const arrayElement of array) {
//     if (typeof arrayElement === 'number') {
//         arrayNumber.push(arrayElement);
//         console.log(arrayElement);
//     }
// }

// =================
// =====class=======
// =================
// Взяти файл task2_template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід content на будь-який інший

// let conGet = document.getElementById('content');
// conGet.style.color = 'green';

// -- робить шириниу елементу ul 400 пікселів

// let conCla = document.getElementsByTagName('ul');
// for (let i = 0; i < conCla.length; i++) {
//     conCla[i].style.width = '400px';
// }

// -- робить шириниу всіх елементів з класом text_segment шириною 50%

// let classText = document.getElementsByClassName('text_segment');
// for (let i = 0; i < classText.length; i++) {
//     classText[i].style.width = '50%';
// }

// -- отримує текст який зберігається в елементі з класом sub-header

// let classSub = document.getElementsByClassName('sub-header');
// for (let i = 0; i < classSub.length; i++) {
//     console.log(classSub[i].innerText);
// }

// -- отримує всі елементи li та змінює ім колір фону на сірий

// let lis = document.getElementsByTagName('li');
// for (const li of lis) {
//     li.style.backgroundColor = 'grey'
// }

// -- отримує всі елементи 'a' та додає їм клас anchor

// let aa = document.getElementsByTagName('a');
// for (const aaElement of aa) {
//     aaElement.classList.add('anchor');
// }

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// for (const aaElement of aa) {
//     if (aaElement.innerText === 'link3') {
//         aaElement.style.fontSize = '40px';
//     }
// }

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// for (const aaElement of aa) {
//     aaElement.classList.add(`element_${aaElement.innerText}`);
// }

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// for (const classSubElement of classSub) {
//     classSubElement.style.backgroundColor = prompt('color');
// }

// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 1 segment . Колір отримати з prompt()

// for (const classSubElement of classSub) {
//     if (classSubElement.innerText === 'content 1 segment') {
//         classSubElement.style.color = prompt('color2')
//     }
// }

// -- отримує елемент з класом sub-header2 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let subHeader = document.getElementsByClassName('sub-header2');
// for (const subHeaderElement of subHeader) {
//     subHeaderElement.innerText = prompt('text')
// }

// -- отримати елементи p та змінити їм padding на довільне значення

// let pp = document.getElementsByTagName('p');
// for (const ppElement of pp) {
//     ppElement.style.padding = '10px'
// }

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення

// let text222 = document.getElementsByClassName('text2');
// for (const text222Element of text222) {
//     text222Element.innerText = 'Ilon Mask'
// }