function checkCashRegister(price, cash, cid) {
  
    const money=[
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];
    const difference=cash-price;
    let box=[];
    for(let i=0;i<cid.length;i++){
      box.push([...cid[i]]);
    }
    let amount=0;
    var result={status:"",change:[]};
    for(let i=money.length-1;i>=0;i--){
      if(difference-money[i][1]>=amount && box[i][1]>0){
        result.change.push([money[i][0],0]);
      }
        while(Math.round((difference-money[i][1])*100)>=Math.round(amount*100) && box[i][1]>0){
          amount=amount+money[i][1];
          box[i][1]=box[i][1]-money[i][1];
          for(let j=0;j<result.change.length;j++){
            if(result.change[j][0]==money[i][0]){
              result.change[j][1]=result.change[j][1]+money[i][1];
    }
  }
      }
    }
  if(difference>amount){
    result.status="INSUFFICIENT_FUNDS";
    result.change=[];
  }else{
    let aux=0;
    for (let i=0;i<box.length;i++){
      aux=aux+box[i][1];
    }
    if(aux>0){
      result.status="OPEN";
    }else{
     result.status="CLOSED";
     result.change=[...cid]; 
    }
  }
    return result;
  }
  