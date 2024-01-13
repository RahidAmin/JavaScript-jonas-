'use strict';

 let dice=Math.trunc(Math.random()*6)+1;  //Important

while(dice !== 6)
{
  dice=Math.trunc(Math.random()*6)+1;
  console.log("Dice: "+dice);
  
}