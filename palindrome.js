function palindrome(str) {
    let letters=str.match(/[a-z0-9]/ig);
    for (let i=0;i<letters.length/2;i++){
      if(letters[i].toLowerCase()!=letters[letters.length-1-i].toLowerCase()){
        return false;
      }
    }
    return true;
  }