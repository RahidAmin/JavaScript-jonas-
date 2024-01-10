
let x,y;
x=y=20-10-5;
console.log(x,y);

//coding challenge 1&2
let markWeight=78,jhonWeight=92;
let markHeight=1.69,jhonHeight=1.95;

let markBMI=markWeight/(markHeight*markHeight);
let jhonBMI=jhonWeight/(jhonHeight*jhonHeight);

let markHeigherBMI=markBMI>jhonBMI;
console.log(markHeigherBMI);
if(markHeigherBMI)
{
    console.log("Mark's BMI is heigher than Jhon");
}
else
{
    console.log(`Jhon's BMI is heigher than marks`);
}

console.log(`Mark's BMI is:${markBMI},Jhon's BMI is:${jhonBMI}`);

//coding challenge 3

let dolphineAverageScore=(96+108+89)/3;
let koalasAverageScore=(88+91+110)/3;
console.log(`Average score resuls for Dolphin:${dolphineAverageScore} and Koalas:${koalasAverageScore}`);

if(dolphineAverageScore>koalasAverageScore)
{
    console.log("Dolphines are the winner");
}else{
    console.log("koalas are the winner");
}


let dolphineAverageScoreBonus1=(97+112+101)/3;
let dolphineAverageScoreBonus2=(97+112+101)/3;


let koalasAverageScoreBonus1=(109+95+123)/3;
let koalasAverageScoreBonus2=(109+95+106)/3;

//bonus 1
if((dolphineAverageScoreBonus1>=100) && (dolphineAverageScoreBonus1>koalasAverageScoreBonus1))
{
    console.log("Bonus1,Dolphin win: "+dolphineAverageScoreBonus1);
    console.log("Bonus1,koalas lose: "+koalasAverageScoreBonus1);
}
else if((koalasAverageScoreBonus1>=100)&&(koalasAverageScoreBonus1>dolphineAverageScoreBonus1))
{
    console.log("Bonus 1,Koalas win: "+koalasAverageScoreBonus1);
    console.log("Bonus 1,dolphine lose: "+dolphineAverageScoreBonus1)
}
else{
    console.log("NO one is winner")
}

//bonus 2
if((dolphineAverageScoreBonus2==koalasAverageScoreBonus2)&&(dolphineAverageScoreBonus2>=100)&&(koalasAverageScoreBonus2>=100))
{
    console.log("Bonus 2:Draw Happend");
}
else
{
    console.log("No one wins");
}

//coding challenge 4:

const bill = 40;

const tip=bill>=50 && bill<=300?(bill*15)/100:(bill*20)/100;
console.log(tip);

console.log(`Bill is:${bill},Tip is: ${tip},total cost: ${bill+tip}`);