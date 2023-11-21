function isVowel(str){
    let vowel=""
    let constant=""
    for(let i=0;i<str.length;i++){
        if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
            vowel+=str[i]
        }else{
            constant+=str[i]
        }
    }
    console.log(vowel,constant); 
}

isVowel("bhoomi")