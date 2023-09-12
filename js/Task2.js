'use strict';

const isPrime = (numb) => {
	for (let i = 2; i < numb; i++) {
		if (numb % i === 0) {
			return false
		}
	}

	return numb > 1
}

console.log(isPrime(36));
console.log(isPrime(5));