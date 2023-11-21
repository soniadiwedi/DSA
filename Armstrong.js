//153 is an Armstrong number because: 1power3=1, 5power3=125, 3power3=27 then add 1+125+27=153 it means this is a armstrong

function isArmstrongNumber(number) {
    const numString = number.toString();
    const numDigits = numString.length;
    let sum = 0;
  
    for (let i = 0; i < numDigits; i++) {
      sum += Math.pow(parseInt(numString[i]), numDigits);
    }
  
    return sum === number;
  }
  
  // Example usage:
  const num = 153;
  if (isArmstrongNumber(num)) {
    console.log(`${num} is an Armstrong number.`);
  } else {
    console.log(`${num} is not an Armstrong number.`);
  }
  