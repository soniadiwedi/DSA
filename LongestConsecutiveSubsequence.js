    function longestConsecutiveSubsequence(arr) {
    if (arr.length === 0) {
      return [];
    }
  
    arr.sort((a, b) => a - b);
    let max=0
    let longestSubsequence = [arr[0]];
    let currentSubsequence = [arr[0]];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1] + 1) {
        currentSubsequence.push(arr[i]);
      } else if (arr[i] !== arr[i - 1]) {
        currentSubsequence = [arr[i]];
      }
  
      if (currentSubsequence.length > longestSubsequence.length) {
        longestSubsequence = currentSubsequence.slice(); //slice creates a new array
      }
      max=Math.max(currentSubsequence.length,longestSubsequence.length)
    }
    console.log(max);
    return longestSubsequence;
  }
  
  // Example usage:
  const array = [7, 8, 1, 5, 4, 3];
  console.log("Longest Consecutive Subsequence:", longestConsecutiveSubsequence(array));
  