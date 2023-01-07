let reverseNumber = (num) => {
  let sum;
  const arry = num.split("").reverse()
  arry.forEach((value,index) => {
    if(index == 0){
      sum = value;
    }else{
      sum += value;
    }
  });
  return sum;
};

let num = 11;
while(true){
  if (num.toString() === reverseNumber(num.toString()) && 
      num.toString(8) === reverseNumber(num.toString(8)) && 
      num.toString(2) === reverseNumber(num.toString(2))) {
    console.log(num);
    break;
  }
  num += 2
};