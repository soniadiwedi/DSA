function CheckFactorial(n){
    if(n==1 ||n==0){
        return 1
    }
      return(n*CheckFactorial(n-1))
        
    }
///////////////////////////////////////////////////////
function calculateFactorial(n) {
        if (n === 0 || n === 1) {
          return 1;
        }
      
        let result = 1;
        for (let i = 2; i <= n; i++) {
          result *= i;
        }
      
        return result;
      }
      
      // Example usage:
      const n = 5;
      const factorial = calculateFactorial(n);
      console.log(`Factorial of ${n} is: ${factorial}`);
      