function binaryToDecimal(binaryNumber) {
    // Check if the input is a valid binary number
    for (let digit of binaryNumber) {
      if (digit !== '0' && digit !== '1') {
        console.log("Invalid binary number.");
        return;
      }
    }
  
    // Convert binary to decimal
    const decimalNumber = parseInt(binaryNumber, 2);
    return decimalNumber;
  }
  
  // Example usage:
  const binaryNumber = "1101";
  const decimalEquivalent = binaryToDecimal(binaryNumber);
  
 console.log(decimalEquivalent);
  