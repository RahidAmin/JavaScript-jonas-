'use strict';

const friends=['mujibul','moto','rafi'];

const rahidArray=[
    'Rahid',
    'amin',
    2024-1998,
    friends

]
const typesOfArray=[];
const typesOfArray1=[];

for(let i=0;i<rahidArray.length;i++)
{
    console.log(rahidArray[i]);

    //filling types array
    typesOfArray[i]=typeof rahidArray[i];  //important
    typesOfArray1.push(typeof rahidArray[i]); //important
}
console.log(typesOfArray);
console.log(typesOfArray1);


const years=[1999,2000,2001,2002];
const ages=[];
for(let i=0;i<years.length;i++)
{
    // ages[i]=2024-years[i];
    ages.push(2024-years[i])
}
console.log(ages);


//----continue and braking

//-----Only Strings-----
for(let i=0;i<rahidArray.length;i++)
{
    if(typeof rahidArray[i] !== 'string') continue;  //continue means skip here//Important

    console.log(rahidArray[i],typeof rahidArray[i]);
}
console.log("--------Break--------");

for(let i=0;i<rahidArray.length;i++)
{
    if(typeof rahidArray[i] === 'number') break;
    console.log(rahidArray[i],typeof rahidArray[i]);
}

//looping backwards
console.log("---------------Looping backward--------");

for(let i=rahidArray.length-1;i>=0;i--)
{
    console.log(rahidArray[i]);
}

console.log("--------------loops in loop------");

for(let i=3;i<=5;i++)
{
    for(let j=1;j<=10;j++)
    {
        console.log(`${i}X${j}=${i*j}`);
    }console.log("Break-------");
}

console.log("------------While loop----------");

let w=1;
while(w<=5)
{
    console.log("While loop: "+w);
    w++;
}
