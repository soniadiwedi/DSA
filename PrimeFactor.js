function primeFactors(number) {
    let factors = [];
    let divisor = 2;
  
    while (number > 1) {
      while (number % divisor === 0) {
        factors.push(divisor);
        number /= divisor;
      }
      divisor++;
    }
  
    return factors;
  }
  
  // Example usage:
  const inputNumber = 56;
  const resultFactors = primeFactors(inputNumber);
  
  console.log(`Prime Factors of ${inputNumber}: ${resultFactors.join(', ')}`);
  