// - Дана textarea.
// 	В неё вводится текст.
// 	Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// const textarea = document.getElementById('textarea');
// textarea.value = localStorage.getItem('text');
// textarea.oninput = (ev) => {
// 	localStorage.setItem('tetx', ev.target.value);
// }

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// 	Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
//  Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// 	Сделайте ваш скрипт как можно более универсальным.

// const form1 = document.getElementById('form1');
// detDataForm(form1);
// function saveForm(e) {
// 	SetDataForm(e);
// }
// function SetDataForm(tag) {
// 	for (let i = 0; i < tag.length; i++) {
// 		if (tag.children[i].name === 'check' || tag.children[i].name === 'radio')
// 			tag.children[i].checked
// 				?tag.children[i].value = true
// 				:tag.children[i].value = false
// 		localStorage.setItem(tag.children[i].id, tag.children[i].value);
// 	}
//
// }
//
// function detDataForm(tag) {
// 	for (let i = 0; i < localStorage.length; i++) {
// 		if (localStorage.hasOwnProperty(tag.children[i].id)) {
// 			tag.children[i].value = localStorage.getItem(tag.children[i].id);
// 			if (tag.children[i].value === 'true') {
// 				tag.children[i].setAttribute('checked', 'checked')
// 			}
// 		}
// 	}
//
// }

// - Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фиксируются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// const textArea = document.getElementById('text-area');
// const leftArea = document.getElementById('left');
// const rightArea = document.getElementById('right');
// const save = document.getElementById('save');
//
// save.onclick = () => {
// 	localStorage.setItem(localStorage.length+1, textArea.value);
// }
// leftArea.onclick = () => {
// 	rightArea.style.visibility = 'visible';
// 	let index;
// 	for (const key in localStorage) {
// 		if (localStorage.hasOwnProperty(key)) {
// 			if (localStorage.getItem(key) === textArea.value) {
// 				index = key;
// 			}
// 		}
// 	}
// 	if (index === '1') {
// 		leftArea.style.visibility = 'hidden';
// 		return;
// 	}
// 	textArea.value = localStorage.getItem(index - 1);
// }
//
// rightArea.onclick = () => {
// 	leftArea.style.visibility = 'visible';
// 	let index;
// 	for (const key in localStorage) {
// 		if (localStorage.hasOwnProperty(key)) {
// 			if (localStorage.getItem(key) === textArea.value) {
// 				index = key;
// 			}
// 		}
// 	}
// 	if (index === localStorage.length.toString()) {
// 		rightArea.style.visibility = 'hidden';
// 		return;
// 	}
// 	textArea.value = localStorage.getItem(+index + 1);
// }

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// 	Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
//  Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

const text = document.getElementById('textArea');
const newNote = document.getElementById('newNote');
const date = document.getElementById('date');
const write = document.getElementById('write');
const read = document.getElementById('read');

text.value = '';
write.onclick = () => {
	let temp = `${date.value} : ${text.value}`;
	localStorage.setItem(date.value, temp);
}
read.onclick = () => {
	let notes = '';
	for (const key in localStorage) {
		if (localStorage.hasOwnProperty(key)) {
			notes += localStorage.getItem(key) + '\n';
		}
	}
	text.value = notes;
}
newNote.onclick = () => {
	text.value = ''
	data.value = ''
}