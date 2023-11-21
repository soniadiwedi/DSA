
function reverseFun(num) {
  let rev = 0;
  while (num > 0) {
    let remainder = num % 10;
    rev = rev * 10 + remainder;
    num = Math.floor(num / 10)
  }
  return rev
}
// console.log(reverseFun(123456));

function stringReverse(num){
    var temp=num.toString()
    let rev=""
    for(let i=temp.length-1;i>=0;i--){
        rev+=temp[i]
    }

  console.log(typeof(parseInt(rev)))
}
stringReverse(123)
// console.log(stringReverse(123));
