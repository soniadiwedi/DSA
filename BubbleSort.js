function bubbleSort(arr){
    let n=arr.length
    let temp;
console.log(n);
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
        
    }
    return arr
}

console.log(bubbleSort([5,8,1,9,2]));