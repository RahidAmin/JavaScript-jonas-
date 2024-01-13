'use strict';


// const calTip=function()
// {
//     const totals=[];
//     const tips=[];
//     const bills=[22,295,176,440,37,105,10,1100,86,52];

//     for(let i=0;i<bills.length;i++)
//     {
//         if(bills[i]>=50 && bills[i]<=300)
//         {
//             tips[i]=(bills[i]*15)/100;
//            totals[i]=(bills[i]+tips[i]);
//         }
//         else
//         {
//             tips[i]=(bills[i]*20)/100;
//             totals[i]=(bills[i]+tips[i]);
          
//         }

//     }
//     console.log(tips);
//     console.log(totals);

// }
// calTip();


////---------------very important------------
const calTip=function(bill)
{
  return bill>=50 && bill<=300?bill*.15:bill*.2;
}


    const totals=[];
    const tips=[];
    const bills=[22,295,176,440,37,105,10,1100,86,52];      

    for(let i=0;i<bills.length;i++)
    {
        const tip=calTip(bills[i]);
        tips.push(tip);
        totals.push(bills[i]+tip);

    }
    console.log(bills,tips,totals);





function calcAverage(arr)
{
   
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
       sum=sum+arr[i];
    }
    return sum/arr.length;
}

const riven=[2,2,2,2,2];

console.log(calcAverage([1,2,3,4,5]));
console.log(calcAverage(totals));
console.log(calcAverage(riven));