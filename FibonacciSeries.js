function fibonacciArray(a, b, n) {
    let result = [a];
    let c;

    for (let i = 0; i < n - 1; i++) {
        c = a + b;
        result.push(c);
        a = b;
        b = c;
    }

    return result;
}

// Example usage [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

const fibonacciSequence = fibonacciArray(0, 1, 10);
// console.log(fibonacciSequence);

function fibonacciRecursive(a, b, n, sequence = []) {
    if (n <= 0) {
        return sequence;
    }

    const c = a + b;
    sequence.push(c);

    return fibonacciRecursive(b, c, n - 1, sequence);
}

const fibonacciSequenceRecursive = fibonacciRecursive(0, 1, 10);
console.log(fibonacciSequenceRecursive);




function fibonacci(n){
    if(n==0){
        return 0
    }if(n==1){
        return 1
    }return fibonacci(n-1)+fibonacci(n-2) ;
    
  }

//   console.log(fibonacci(10));