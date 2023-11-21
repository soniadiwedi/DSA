function power(base, exponent) {
    let result = 1;
  
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
  
    return result;
  }
  
  // Example usage:
console.log(power(2,3))
  
  
  