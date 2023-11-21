//  square an automorphic number and look at the result's rightmost digits, they match the original number.
// For example, 5 is an automorphic number because 5^2 = 25, and the last digit of 25 is 5.

function checkAutomorphic(num) {
     square = num * num;

  while (num > 0) {
    if (num % 10 !== square % 10)
      return false;

    // Reduce num and square
    num = Math.floor(num / 10);
    square = Math.floor(square / 10);
  }

  return true;
  }
  
  // Example usage:
  const num = 25; // You can change this to test different numbers
if (checkAutomorphic(num)) {
  console.log(`${num} is an Automorphic number.`);
} else {
  console.log(`${num} is not an Automorphic number.`);
}
  