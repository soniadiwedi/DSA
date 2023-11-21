// perfect number means when number lcm is eqal to number like 6 lcm 3,1

function isPerfectNumber(number) {
    if (number <= 1) {
      return false; // Perfect numbers are positive integers greater than 1
    }
  
    let sum = 1; // Start with 1 because all numbers are divisible by 1
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        sum += i;
  
        // If the divisors are not the same (i.e., not a perfect square), add the other divisor
        if (i !== number / i) {
          sum += number / i;
        }
      }
    }
  
    return sum === number;
  }
  
  // Example usage
  const exampleNumber = 6;
  if (isPerfectNumber(exampleNumber)) {
    console.log(`${exampleNumber} is a perfect number.`);
  } else {
    console.log(`${exampleNumber} is not a perfect number.`);
  }
  