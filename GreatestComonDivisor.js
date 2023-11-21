// how to find greatest common divisor a*b then find lcm of a,b then divided by a*b

function gcd(p, q) {
    if (p === 0) {
      return q;
    }
  
    if (q === 0) {
      return p;
    }
  
    while (q !== 0) {
      const temp = q;
      q = p % q;
      p = temp;
    }
  
    return p;
  }
  


  function gcdRecursive(p, q) {
    // checking divisibility by 0
    if (p === 0) {
      return q;
    }
  
    if (q === 0) {
      return p;
    }
  
    // base case
    if (p === q) {
      return p;
    }
  
    // p is greater
    if (p > q) {
      return gcd(p - q, q);
    } else {
      return gcd(p, q - p);
    }
  }

  // Driver program to test above function
  function main() {
    const p = 98;
    const q = 56;
    console.log(`GCD of ${p} and ${q} is ${gcdRecursive(p, q)}`);
  }
  
  // Run the main function
  main();
  