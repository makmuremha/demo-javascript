console.log("Enter min number and max number on isPrime function");
const isPrime = (minNumber, maxNumber) => {
	if (typeof minNumber != "number" || typeof maxNumber != "number"){
		return console.log("Please enter a number");
	}

	if(minNumber < maxNumber) {
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
		console.log(`primes number between ${minNumber} and ${maxNumber} is ${primeNumber}`);
	}else{
		console.log("min number must be less than max number");
	}	
};
isPrime(1,10);
