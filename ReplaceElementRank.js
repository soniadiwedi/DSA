// Write a code to replace each element in an array by its rank in the array

function changeArr(arr) {
    let newArray=arr.slice().sort((a,b)=>b-a)
    
    let obj={}
    for(let i=0;i<newArray.length;i++){
        obj[newArray[i]]=i+1   
    }
    console.log(obj);
    for(let j=0;j<arr.length;j++){
        arr[j]=obj[arr[j]]
    }
    console.log(arr)
  }
  
  // Driver Code
  const arr = [100, 2, 70, 12, 90];
//  2 12 70 90 100  
//  5 1  3  2  4
  changeArr(arr);
  


  