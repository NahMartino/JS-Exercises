function rot13(str) {
    let letters=str.match(/./g);
    let result="";
    for(let i=0;i<letters.length;i++){
      if(/[A-Z]/i.test(letters[i])){
        if(/[A-M]/i.test(letters[i])){
        result=result+String.fromCharCode(letters[i].charCodeAt(0)+13)
        }else{
  result=result+String.fromCharCode(letters[i].charCodeAt(0)-13)
        }
      }else{
        result=result+letters[i];
      }
    }
    console.log(result);
    return result;
  }
  