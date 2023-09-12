'use strict';

const isReverse = (str) => {
	if(typeof str === 'string') {
		let changeStr = str;

		changeStr = changeStr.split('').reverse();
		let reverseStr = changeStr.join(' ');

		return reverseStr
	} else {
		return 'Введите в формате строки'
	}
	
}

console.log(isReverse('Привет мир'));