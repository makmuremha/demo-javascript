const isPrime = (minNumber, maxNumber) => {
	let primeNumber = [];
	for (let number = minNumber; number <= maxNumber; number++) {
		let diff = 0;

		for (let i = 1; i <= number; i++) {
			if (number % i == 0) {
				diff++;
			}
		}
		
		if (diff === 2) {
			primeNumber += `${number},`;
		}
	}
	console.log("primes number is "+primeNumber);
};

isPrime(1,10);
