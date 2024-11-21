function position(letter){
    let ali = "abcdefghijklmnopqrstuvwxyz", res =0;
    let al = ali.split("");
    for(let i =0; i < al.length; i++){
    if(letter == al[i]) {
      res = i;
    }
      }
    res = res +1;
    return `Position of alphabet: ${res}` ;
  }
  console.log(position("b"));