// Так. Письмова таска.
// 	Зробити свій розпоряжок дня.
//
// 	Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в день.
// 	Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
// 	Зробити таких функцій в районі 10 штук. Функція має приймати параметр, який буде відповідати за успішне чи не успішне виконання.
// 	Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.
//
// 	Тобто, як приклад
// Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали - Працюєте - Випили кави - Працюєте - Поїхали до дому - Повчились - Лягли спати.
//
// 	Кожна функція має мати якесь успіше або не успішне виконання. Тобто можливий варіант, що при виконанні функції доїхати на роботу ви стали в заторі і не попали на роботу. Або йдучи на обід ви забули гаманець і лишились голодні.

function awake(massage) {
	console.log('I woke up');
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			Math.random() > 0.2
				? resolve (massage)
				: reject ('Overslept')
		}, 1000)
	})
}

function breakfast(myBreakfast) {
	console.log('I had breakfast');
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			Math.random() > 0.3
				? resolve (myBreakfast)
				: reject ('I did not have breakfast')
		}, 500)
	})
}

function goingTo(go) {
	console.log('I am going to');
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			Math.random() > 0.1
				? resolve (go)
				: reject ('Went to sleep')
		}, 2000)
	})
}

function wentToWork(work) {
	console.log('I went to work');
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			Math.random() > 0.2
				? resolve (work)
				: reject ('Stayed at home')
		}, 1000)
	})
}

function iWork(job) {
	console.log('I work');
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			Math.random() > 0.3
				? resolve (job)
				: reject ('Walking')
		}, 2000)
	})
}

function haveLunch(lunch) {
	console.log('I have dinner');
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			Math.random() > 0.2
				? resolve (lunch)
				: reject ('I work further')
		}, 1000)
	})
}

function workFurther(job) {
	console.log('I work');
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			Math.random() > 0.35
				? resolve (job)
				: reject ('Go to home')
		}, 500)
	})
}

function haveCoffee(coffee) {
	console.log('I drink coffee');
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			Math.random() > 0.1
				? resolve (coffee)
				: reject ('Coffee is bad')
		}, 1000)
	})
}

function haveGoneToHome(home) {
	console.log('I go to home');
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			Math.random() > 0.15
				? resolve (home)
				: reject ('Went for a walk')
		}, 2000)
	})
}

function haveLearned(study) {
	console.log('I study');
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			Math.random() > 0.2
				? resolve (study)
				: reject ('Go to slip')
		}, 2000)
	})
}

function haveGoneToBed(slip) {
	console.log('I slip');
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			Math.round() > 0.2
				? resolve (slip)
				: reject ('Not sleeping')
		}, 1500)
	})
}

awake('alarmClock')
	.then((result) => {
		console.log(result);
		return breakfast('beef')
	})
	.then((result) => {
		console.log(result);
		return goingTo('clothes')
	})
	.then((result) => {
		console.log(result);
		return wentToWork('car')
	})
	.then((result) => {
		console.log(result);
		return iWork('code')
	})
	.then((result) => {
		console.log(result);
		return haveLunch('hamburger')
	})
	.then((result) => {
		console.log(result);
		return workFurther('code')
	})
	.then((result) => {
		console.log(result);
		return haveCoffee('espresso')
	})
	.then((result) => {
		console.log(result);
		return haveGoneToHome('car')
	})
	.then((result) => {
		console.log(result);
		return haveLearned('OktenWeb')
	})
	.then((result) => {
		console.log(result);
		return haveGoneToBed('dreem')
	})
	.catch((error) => {
		console.log(error);
	})
