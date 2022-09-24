console.log(
  "Enter minimum number and maximum number on generatePrimeNumbers function"
);

const generatePrimeNumbers = (minNumber, maxNumber) => {
  let primeNumbers = [];

  // Check the parameters are numbers
  if (typeof minNumber !== "number" || typeof maxNumber !== "number") {
    console.error("Please enter a number for minNumber and maxNumber");
    return;
  }

  // Limit the maximum number
  if (maxNumber > 1000) {
    console.error("Please enter a number less than 1000");
    return;
  }

  // Make sure that minimum number is less than maximum number
  if (minNumber > maxNumber) {
    console.error("Minimum number must be less than maximum number");
    return;
  }

  // Loop over between minimum number to maximum number
  // Check if each number is only divisible by 1 or its own
  for (
    let currentNumber = minNumber;
    currentNumber <= maxNumber;
    currentNumber++
  ) {
    let divisionProducts = 0;

    for (
      let numberToCompare = 1;
      numberToCompare <= currentNumber;
      numberToCompare++
    ) {
      if (currentNumber % numberToCompare === 0) {
        divisionProducts++;
      }
    }

    if (divisionProducts === 2) {
      primeNumbers += `${currentNumber},`;
    }
  }

  console.log(
    `Prime numbers between ${minNumber} and ${maxNumber} are ${primeNumbers}`
  );
};

generatePrimeNumbers(1, 10);
