function digitToWord(digit) {
    const digitWords = [
      'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'
    ];
  
    if (digit >= 0 && digit <= 9) {
      return digitWords[digit];
    } else {
      return 'Invalid digit';
    }
  }
  
  // Example usage:
  const inputDigit = 5;
  const resultWord = digitToWord(inputDigit);
  
  console.log(`Digit ${inputDigit} in words: ${resultWord}`);
  