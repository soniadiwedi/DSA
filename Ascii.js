function findASCIIValue(character) {
    if (character.length !== 1) {
      console.log("Please enter a single character.");
      return;
    }
  
    const asciiValue = character.charCodeAt(0);
    console.log(`ASCII value of '${character}' is: ${asciiValue}`);
  }
  
  // Example usage:
  const char = 'A'; // You can change this to test different characters
  findASCIIValue(char);
  