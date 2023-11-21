function nonRepeating(str){
    let obj={}

    for(let i=0;i<str.length;i++){
      if ( obj[str[i]]===undefined){
        obj[str[i]]=1
       }else{
        obj[str[i]]++
       }
    }

    for(let key in obj){
        if(obj[key]===1){
            console.log(key)
        }
    }
}

nonRepeating("rram")