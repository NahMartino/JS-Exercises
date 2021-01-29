function telephoneCheck(str) {
    let regex1=/^1*\s*\(\d{3}\)[\s\-]*\d{3}[\s\-]*\d{4}$/;
    let regex2=/^1*\s*\d{3}[\s\-]*\d{3}[\s\-]*\d{4}$/;
    if(/[a-z]/i.test(str)){
      return false;
    }else{
      if(regex1.test(str) || regex2.test(str)){
        return true
      }
    }
    return false;
  }