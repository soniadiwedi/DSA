function sumOfNaturalNumbers(n) {
    if (n === 1) {
      return 1;
    } else {
      return n + sumOfNaturalNumbers(n - 1);
    }
  }
  
  // Example usage:
  const n = 5;
//   const sum = sumOfNaturalNumbers(n);
//   console.log(`Sum of the first ${n} natural numbers is: ${sum}`);
function sumOfNatural(n) {
    let sum = 0;
  
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  
    return sum;
  }