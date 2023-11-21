function palindrom(str){
    let rev=""
    for(let i=str.length-1;i>=0;i--){
        rev+=str[i]
    }
    if(rev===str){
        console.log("yes");
    }else{
        console.log("no");
    }
}

// palindrom("mam")
function longestPalindromSubString(str){
    let max=0
    for(let i=0;i<str.length;i++){
        let bag=""
        for(let j=i;j<str.length;j++){
            bag+=str[j]
            let rev=""
            for(let k=bag.length-1;k>=0;k--){
                rev+=bag[k]
            }
            if(bag===rev && bag.length>max){
                max=bag.length
            }
        }
    }
    console.log(max)
}

