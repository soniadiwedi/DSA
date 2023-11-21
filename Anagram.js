

function anagram(str1,str2){
    let obj1={}
    let obj2={}
    let flag=true
    for(let i=0;i<str1.length;i++){
        if(obj1[str1[i]]===undefined){
            obj1[str1[i]]=1
        }else{
            obj1[str1[i]]++
        }
    }
    for(let j=0;j<str2.length;j++){
        if(obj2[str2[j]]===undefined){
            obj2[str2[j]]=1
        }else{
            obj2[str2[j]]++
        }
    }
    
    for(let key in obj1){
        if(obj1[key]!==obj2[key]){
            flag=false
        }
    }
    
    if(flag===true){
        return "yes"
    }else{
        return "NO"
    }
    
}

console.log(anagram("anagra","nag a r"))
