function sumOfDigits(number) {
    let sum = 0;
    let num = Math.abs(number); // Ensure the number is non-negative
  
    while (num > 0) {
      sum += num % 10; // Add the last digit to the sum
      num = Math.floor(num / 10); // Remove the last digit
    }
  
    return sum;
  }
  
  // Example usage:
  const inputNumber = 12345;
  const resultSum = sumOfDigits(inputNumber);
  
  console.log(`Sum of Digits of ${inputNumber}: ${resultSum}`);
  