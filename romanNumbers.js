function convertToRoman(num) {
    let base=num;
    let romans={
        4:["M"],
        3:["C","D"],
        2:["X","L"],
        1:["I","V"]
    }
    let result="";
    for(let i=0;i<4;i++){
        result=result+map(romans,4-i,Math.floor(base/Math.pow(10,3-i)))
        base=base-Math.floor(base/Math.pow(10,3-i))*Math.pow(10,3-i);
    }
    console.log(result)
 return result;
}
function map(dic,ind,num){
    switch (num){
        case 1:
        return dic[ind][0];
        break;
        case 2:
        return dic[ind][0]+dic[ind][0];
        break;
        case 3:
        return dic[ind][0]+dic[ind][0]+dic[ind][0];
        break;
        case 4:
        return dic[ind][0]+dic[ind][1];
        break;
        case 5:
        return dic[ind][1];
        break;
        case 6:
        return dic[ind][1]+dic[ind][0];
        break;
        case 7:
        return dic[ind][1]+dic[ind][0]+dic[ind][0];
        break;
        case 8: 
        return dic[ind][1]+dic[ind][0]+dic[ind][0]+dic[ind][0];
        break;
        case 9:
        return dic[ind][0]+dic[ind+1][0];
        break;
        default:
        return "";
        break;
    }
}