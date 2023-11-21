function removeNonAlphabets(inputString) {
    let resultString = '';
  
    for (let i = 0; i < inputString.length; i++) {
      // Check for alphabets
      if (
        (inputString[i].charCodeAt(0) >= 65 && inputString[i].charCodeAt(0) <= 90) ||
        (inputString[i].charCodeAt(0) >= 97 && inputString[i].charCodeAt(0) <= 122)
      ) {
        // Concatenate to the result string
        resultString += inputString[i];
      }
    }
  
    return resultString;
  }
  
  // Example usage:
  const inputString = "Hello123, World!";
  const resultString = removeNonAlphabets(inputString);
  
  console.log('Alphabets in string are: ' + resultString);
  