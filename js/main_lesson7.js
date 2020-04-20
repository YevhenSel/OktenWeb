// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let buttons = document.getElementsByTagName('button');
// let btn = buttons[0];
// const idText = document.getElementById('text');
// btn.onmousedown = function () {
// 	idText.style.display = 'none';
// }

// 	- Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// btn.onmousedown = () => {
// 	btn.style.display = 'none';
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let buttons = document.getElementsByTagName('button');
// let btn2 = buttons[1];
// btn2.onclick = () => {
//     +document.getElementById('inputAge').value < 18
//         ? alert('young')
//         : alert('goodbuy');
// }

// - Создайте меню, которое раскрывается/сворачивается при клике

// const menu = document.getElementById('menu');
// const element = document.getElementById('menuClick');
// element.style.display = 'none';
// let flag = true;
// menu.onclick = e => {
// 	if (flag) {
// 		element.style.display = 'block';
// 		flag = false;
// 	} else {
// 		element.style.display = 'none';
// 		flag = true;
// 	}
//
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// 	Вывести список комментариев в документ, каждый в своем блоке.
// 	Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [
// 	{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
// 	{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
// 	{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
// 	{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
// 	{title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// ];
// const content = document.getElementById('content');
// comments.forEach(target => {
// 	const div = document.createElement('div');
// 	const h2 = document.createElement('h2');
// 	const p = document.createElement('p');
// 	const button = document.createElement('button');
// 	button.innerText = 'click me';
// 	button.onclick = ev => {
// 		p.hidden
// 			? p.hidden = false
// 			: p.hidden = true
// 	}
// 	h2.innerHTML = target.title;
// 	p.innerHTML = target.body;
// 	div.appendChild(h2);
// 	div.appendChild(p);
// 	div.appendChild(button);
// 	content.appendChild(div);
// });

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// 	Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
//  Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// const btn = document.getElementById('btn-input');
// const input1 = document.forms.form1.input1;
// const input2 = document.forms.form1.input2;
// const input3 = document.forms.form2.input3;
// const input4 = document.forms.form2.input4;
// btn.onclick = () => {
// 	for (const input of document.forms.form1) {
// 		console.log(input.value);
// 	}
// 	for (const input of document.forms.form2) {
// 		console.log(input.value);
// 	}
// }

// - Створити функцію, яка генерує таблицю.
// 	Перший аргумент визначає кількість строк.
// 	Другий параметр визначає кліькіть ячеєк в кожній строці.
// 	Третій параметр визначає елемент в який потрібно таблицю додати.

// function table(line, column, element) {
// 	const el = document.createElement(element);
// 	const tableElement = document.createElement('table');
// 	for (let i = 0; i < line; i++) {
// 		const tr = document.createElement('tr');
// 		for (let j = 0; j < column; j++) {
// 			const td = document.createElement('td');
// 			td.innerHTML = i.toString() + j.toString();
// 			tr.appendChild(td);
// 		}
// 		tableElement.appendChild(tr);
// 	}
// 	el.appendChild(tableElement);
// 	document.body.appendChild(el);
// }
// table(5,10,'div')

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
// 	При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)

// const line_inp = document.getElementById('inp1');
// const column_inp = document.getElementById('inp2');
// const text_inp = document.getElementById('inp3');
// const button_table = document.getElementById('btn_inp');
//
// button_table.onclick = function () {
// 	console.log(text_inp);
// 	const table = document.createElement('table');
// 	for (let i = 0; i < line_inp.value; i++) {
// 		const tr = document.createElement('tr');
// 		for (let j = 0; j < column_inp.value; j++) {
// 			const td = document.createElement('td');
// 			td.innerText = text_inp.value;
// 			tr.appendChild(td);
//
// 		}
// 		table.appendChild(tr);
// 	}
// 	document.body.appendChild(table);
//
// }

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let imgArray = [
// 	{
// 		id: 1,
// 		img_url: 'img/MacBook1.png',
// 	},
// 	{
// 		id: 2,
// 		img_url: 'img/MacBook2.png',
// 	},
// 	{
// 		id: 3,
// 		img_url: 'img/MacBook3.png',
// 	}
// ];
//
// const imgContainer = document.getElementById('imgContainer');
// const leftBtn = document.getElementById('left');
// const rightBtn = document.getElementById('right');
// const img = document.createElement('img');
//
// let index = 0;
// img.src = imgArray[index].img_url;
//
// imgContainer.appendChild(img);
// leftBtn.onclick = () => {
// 	index - 1 < 0
// 		?index = imgArray.length - 1
// 		:index = index - 1
// 	img.src = imgArray[index].img_url;
// }
// rightBtn.onclick = () => {
// 	index + 1 > imgArray.length -1
// 		?index = 0
// 		:index = index + 1
// 	img.src = imgArray[index].img_url;
// }

// - Сворити масив не цензцрних слів.
// 	Сворити інпут текстового типу.
// 	Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// 	Перевірку робити при натисканні на кнопку

// let fuckArray = ['fuck', 'fuck1', 'fuck2','fuck3','fuck4','fuck5','fuck6','fuck7','fuck8','fuck9'];
//
// const div = document.createElement('div');
// const input = document.createElement('input');
// const button = document.createElement('button');
//
// input.type = 'text';
// button.innerText = 'check'
//
// div.appendChild(input);
// div.appendChild(button);
// document.body.appendChild(div);
//
// button.onclick = () => {
// 	for (let i = 0; i < fuckArray.length; i++) {
// 		if (input.value === fuckArray[i]) {
// 			alert('bad');
// 		}
// 	}
// }


// - Сворити масив не цензцрних слів.
// 	Сворити інпут текстового типу.
// 	Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// 	Кинути алерт з попередженням у випадку якщо містить.
// 	Перевірку робити при натисканні на кнопку

// let fuckArray = ['fuck', 'fuck1', 'fuck2','fuck3','fuck4','fuck5','fuck6','fuck7','fuck8','fuck9'];
//
// const div = document.createElement('div');
// const input = document.createElement('input');
// const button = document.createElement('button');
//
// input.type = 'text';
// button.innerText = 'check'
//
// div.appendChild(input);
// div.appendChild(button);
// document.body.appendChild(div);
//
// button.onclick = () => {
// 	let inputSplit = input.value.split(' ');
// 	for (let i = 0; i < inputSplit.length; i++) {
// 		for (let j = 0; j < fuckArray.length; j++) {
// 			if (inputSplit[i] === fuckArray[j]) {
// 				alert('bad');
//
// 			}
// 		}
// 	}
// }

// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// 	При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// const h2 = document.getElementsByTagName('h2');
// const content = document.getElementById('content');
// const wrap = document.getElementById('wrap');
// const ul = document.createElement('ul');
// for (let i = 0; i < h2.length; i++) {
// 	const li = document.createElement('li');
// 	const a = document.createElement('a');
// 	let yakor = 'yakor + i';
// 	a.href = '#' + yakor;
// 	h2[i].setAttribute('id',yakor);
// 	a.innerHTML = h2[i].innerText;
// 	li.appendChild(a);
// 	ul.appendChild(li);
//
// }
// content.appendChild(ul);

// -- взять массив пользователей
// let usersWithAddress = [
// 	{id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
// 	{id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
// 	{id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
// 	{id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
// 	{id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
// 	{id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
// 	{id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
// 	{id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
// 	{id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
// 	{id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
// 	{id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// const checkContainer = document.getElementById('checkContainer');
// const divka = document.createElement('div');
// divka.appendChild(content(usersWithAddress));
// const input1 = document.createElement('input');
// const input2 = document.createElement('input');
// const input3 = document.createElement('input');
// const label1 = document.createElement('label');
// const label2 = document.createElement('label');
// const label3 = document.createElement('label');
// const button = document.createElement('button');
//
// label1.innerText = 'Status false';
// label2.innerText = 'Age > 29';
// label3.innerText = 'City: Kyiv';
// button.innerText = 'FILTER';
//
// input1.type = 'checkbox';
// input2.type = 'checkbox';
// input3.type = 'checkbox';
//
// checkContainer.appendChild(divka);
// checkContainer.appendChild(label1);
// checkContainer.appendChild(input1);
// checkContainer.appendChild(label2);
// checkContainer.appendChild(input2);
// checkContainer.appendChild(label3);
// checkContainer.appendChild(input3);
// checkContainer.appendChild(button);
//
// button.onclick = ev => {
// 	let myArray = JSON.parse(JSON.stringify(usersWithAddress));
// 	if (input1.checked) myArray = myArray.filter(value => !value.status);
// 	if (input2.checked) myArray = myArray.filter(value => value.age >= 29);
// 	if (input3.checked) myArray = myArray.filter(value => value.address.city === 'Kyiv');
// 	divka.innerHTML = '';
// 	divka.appendChild(content(myArray))
// }
//
// function content(array) {
// 	const main = document.createElement('div');
// 	array.forEach(item => {
// 		const div = document.createElement('div');
// 		div.innerHTML = JSON.stringify(item);
// 		main.appendChild(div)
// 	})
// 	return main;
// }

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// 	Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
//
