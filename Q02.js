const operator_array = [' + ', ' - ', ' * ', ' / ', '']
for(let i = 1000; i < 10000; i++){
  for(let j = 0; j < operator_array.length; j++){
    for(let k = 0; k < operator_array.length; k++){
      for(let l = 0; l < operator_array.length; l++){
        const result =
          String(i).charAt(3) +
          operator_array[j] +
          String(i).charAt(2) +
          operator_array[k] +
          String(i).charAt(1) +
          operator_array[l] +
          String(i).charAt(0);
        if(result.length > 4){
          if (i === eval(result)) {
            console.log(result + " = " + i);
          }
        }
      }
    }
  }
}