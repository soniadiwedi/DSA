function rotateArrayCircular(arr,k){
    const n=arr.length
    function reverseArray(start,end){
        while(start<end){
            let temp=arr[start]
            arr[start]=arr[end]
            arr[end]=temp
            start++
            end--
        }
    }
// Handle cases where k is greater than array length
  k = k % n;

  // Reverse the entire array
  reverseArray(0, n - 1);

  // Reverse the first part up to K positions
  reverseArray(0, k - 1);

  // Reverse the remaining part after K positions
  reverseArray(k, n - 1);

  return arr
}

// console.log(rotateArrayCircular([1, 2, 3, 4, 5], 2))

let stringWithSpaces = "Hello, World!";
let res=""
for(let i=0;i<stringWithSpaces.length;i++){
    if(stringWithSpaces[i]!==" "){
        res+=stringWithSpaces[i]
    }
}
console.log(res)