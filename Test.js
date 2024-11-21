function generateShape(integer){
  let num = '+', res = '+';
  for(let i=1; i < integer * integer; i++) {
    if(i % integer == 0 && integer *integer != i ) {
      res += '\n';
      
    }
    res += num;
    
    }
   
   
   return res;
}
console.log(generateShape(6));
