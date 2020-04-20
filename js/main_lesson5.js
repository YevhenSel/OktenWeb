//
//
// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// - назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// - назву атрибуту
// - опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
//

// function Tag(titleOfTag, action, attrsName, attrsDest) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = [{attrsName, attrsDest}];
//
// }
//
// let tagA = new Tag('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', 'accesskey', 'Активация ссылки с помощью комбинации клавиш.');
// console.log(tagA);
//
// let tagDiv = new Tag('<div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', 'align', 'Задает выравнивание содержимого тега <div>.');
// console.log(tagDiv);
//
// let tagH1 = new Tag('<h1>', 'Тег <h1> представляет собой наиболее важный заголовок первого уровня', 'align', 'Определяет выравнивание заголовка.');
// console.log(tagH1);
//
// let tagSpan = new Tag('<span>', 'Тег <span> предназначен для определения строчных элементов документа.', 'accesskey', 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.');
// console.log(tagSpan);
//
// let tagInput = new Tag('<input>', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', 'accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.');
// console.log(tagInput);
//
// let tagForm = new Tag('<form>', 'Тег <form> устанавливает форму на веб-странице.', 'accept-charset', 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.');
// console.log(tagForm);
//
// let tagOption = new Tag('<option>', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', 'disabled', 'Заблокировать для доступа элемент списка.');
// console.log(tagOption);
//
// let tagSelect = new Tag('<select>', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.', 'accesskey', 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.');
// console.log(tagSelect);

//
// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
//

// class TagHTML {
//     constructor(titleOfTagHTML, actionHTML, attrsNameHTML, attrsDestHTML) {
//         this.titleOfTagHTML = titleOfTagHTML;
//         this.actionHTML = actionHTML;
//         this.attrsHTML = [{attrsNameHTML, attrsDestHTML}];
//     }
// }
//
// let tagAHTML = new TagHTML('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', 'accesskey', 'Активация ссылки с помощью комбинации клавиш.');
// console.log(tagAHTML);
//
// let tagDivHTML = new TagHTML('<div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', 'align', 'Задает выравнивание содержимого тега <div>.');
// console.log(tagDivHTML);
//
// let tagH1HTML = new TagHTML('<h1>', 'Тег <h1> представляет собой наиболее важный заголовок первого уровня', 'align', 'Определяет выравнивание заголовка.');
// console.log(tagH1HTML);
//
// let tagSpanHTML = new TagHTML('<span>', 'Тег <span> предназначен для определения строчных элементов документа.', 'accesskey', 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.');
// console.log(tagSpanHTML);
//
// let tagInputHTML = new TagHTML('<input>', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', 'accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.');
// console.log(tagInputHTML);
//
// let tagFormHTML = new TagHTML('<form>', 'Тег <form> устанавливает форму на веб-странице.', 'accept-charset', 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.');
// console.log(tagFormHTML);
//
// let tagOptionHTML = new TagHTML('<option>', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', 'disabled', 'Заблокировать для доступа элемент списка.');
// console.log(tagOptionHTML);
//
// let tagSelectHTML = new TagHTML('<select>', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.', 'accesskey', 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.');
// console.log(tagSelectHTML);

//
// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і добавляет його в поточний об'єкт car
// ==============================================
//

// let car = {
//     model: 'Accord',
//     company: 'Honda',
//     year: 2012,
//     maxSpeed: 280,
//     volume: 2.4,
//     drive: function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     },
//     info: function () {
//         console.log(`
//             model: ${this.model},
//             company: ${this.company},
//             year: ${this.year},
//             maxSpeed: ${this.maxSpeed},
//             volume: ${this.volume}
//         `)
//     },
//     increaseMaxSpeed: function (newSpeed) {
//         let onlySpeed = this.maxSpeed += newSpeed;
//         console.log(onlySpeed);
//     },
//     changeYear: function (newValue) {
//         let onlyYear = this.year = newValue;
//         console.log(onlyYear);
//     },
//     addDriver: function (driver) {
//         this.driver = driver;
//         console.log(this.driver);
//     }
//
// };
// driver = {
//     name: 'Jon',
//     age: 30,
// };
// car.drive();
// car.info();
// car.increaseMaxSpeed(20);
// car.changeYear(2020);
// car.addDriver(driver);


//
// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// function Car(model, company, year, maxSpeed, volume) {
//     this.model = model;
//     this.company = company;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//
//     this.info = function () {
//         console.log(`
//             model: ${this.model},
//             company: ${this.company},
//             year: ${this.year},
//             maxSpeed: ${this.maxSpeed},
//             volume: ${this.volume}
//         `)
//     };
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         let onlySpeed = this.maxSpeed += newSpeed;
//         console.log(onlySpeed);
//     };
//
//     this.changeYear = function (newValue) {
//         let onlyYear = this.year = newValue;
//         console.log(onlyYear);
//     };
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//         console.log(this.driver);
//     }
//
// }
// driver = {
//     name: 'Jon',
//     age: 30,
// };
// let car = new Car('Accord', 'Honda', 2012, 280, 2.4);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(20);
// car.changeYear(2020);
// car.addDriver(driver);

// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//

// class Car {
//     constructor(model, company, year, maxSpeed, volume) {
//         this.model = model;
//         this.company = company;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     info() {
//         console.log(`
//             model: ${this.model},
//             company: ${this.company},
//             year: ${this.year},
//             maxSpeed: ${this.maxSpeed},
//             volume: ${this.volume}
//         `)
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         let onlySpeed = this.maxSpeed += newSpeed;
//         console.log(onlySpeed);
//     }
//
//
//     changeYear(newValue) {
//         let onlyYear = this.year = newValue;
//         console.log(onlyYear);
//     }
//
//
//     addDriver(driver) {
//         this.driver = driver;
//         console.log(this.driver);
//     }
//
// }
//
// driver = {
//     name: 'Jon',
//     age: 30,
// };
// let superCar = new Car('Accord', 'Honda', 2012, 280, 2.4);
// console.log(superCar);
// superCar.drive();
// superCar.info();
// superCar.increaseMaxSpeed(20);
// superCar.changeYear(2020);
// superCar.addDriver(driver);

//
// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
//

// class Popelyushka {
//     constructor(name, age, footsize) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     }
//
//
// }
// let popelyushka0 = new Popelyushka('Polina', 20, 35.2);
// let popelyushka1 = new Popelyushka('Alena', 25, 36.5);
// let popelyushka2 = new Popelyushka('Masha', 21, 35.5);
// let popelyushka3 = new Popelyushka('Olya', 19, 37.2);
// let popelyushka4 = new Popelyushka('Kristina', 22, 35);
// let popelyushka5 = new Popelyushka('Karina', 18, 36);
// let popelyushka6 = new Popelyushka('Nastya', 27, 34);
// let popelyushka7 = new Popelyushka('Anna', 26, 38);
// let popelyushka8 = new Popelyushka('Yuliya', 29, 39);
// let popelyushka9 = new Popelyushka('Sofiya', 23, 35.7);
//
// let arrayPopelyushka = [popelyushka0, popelyushka1, popelyushka2, popelyushka3, popelyushka4, popelyushka5, popelyushka6, popelyushka7, popelyushka8, popelyushka9];
//
// class Princ {
//     constructor(name, age, slipper) {
//         this.name = name;
//         this.age = age;
//         this.slipper = slipper;
//     }
//
//     givPopelyushka(array) {
//         for (const arrayElement of array) {
//             if (arrayElement.footsize === this.slipper){
//                 console.log(this.name + ' ' + 'love' + ' ' + arrayElement.name);
//             }
//         }
//     }
//
// }
// let princ = new Princ('Yevhen', '27', 35);
// princ.givPopelyushka(arrayPopelyushka);

//
// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

// function Popelyushka(name, age, footsize) {
//     this.name = name;
//     this.age = age;
//     this.footsize = footsize;
//
// }
//
// let popelyushka0 = new Popelyushka('Polina', 20, 35.2);
// let popelyushka1 = new Popelyushka('Alena', 25, 36.5);
// let popelyushka2 = new Popelyushka('Masha', 21, 35.5);
// let popelyushka3 = new Popelyushka('Olya', 19, 37.2);
// let popelyushka4 = new Popelyushka('Kristina', 22, 35);
// let popelyushka5 = new Popelyushka('Karina', 18, 36);
// let popelyushka6 = new Popelyushka('Nastya', 27, 34);
// let popelyushka7 = new Popelyushka('Anna', 26, 38);
// let popelyushka8 = new Popelyushka('Yuliya', 29, 39);
// let popelyushka9 = new Popelyushka('Sofiya', 23, 35.7);
//
// let arrayPopelyushka = [popelyushka0, popelyushka1, popelyushka2, popelyushka3, popelyushka4, popelyushka5, popelyushka6, popelyushka7, popelyushka8, popelyushka9];
//
// function Princ(name, age, slipper) {
//     this.name = name;
//     this.age = age;
//     this.slipper = slipper;
//
//     this.givPopelyushka = function(array) {
//         for (const arrayElement of array) {
//             if (arrayElement.footsize === this.slipper){
//                 console.log(this.name + ' ' + 'love' + ' ' + arrayElement.name);
//             }
//         }
//     }
//
// }
// let princ1 = new Princ('Yevhen', '27', 35);
// princ1.givPopelyushka(arrayPopelyushka);