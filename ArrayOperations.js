'use strict';

const friends=['rahid','amin','siddique'];
  
//to add elements
  const newArray=friends.push('riven'); //push methond(function) returns the length;
  console.log(friends);
  console.log(newArray);

  friends.unshift("MD");  //it will add to the beginnig of the array and return the length of the array;
  console.log(friends);

 
  //to remove elements
  
  const popped=friends.pop() //it returns the removed element of the array
 console.log(friends);
 console.log(popped);

  friends.shift();
  console.log(friends);
  friends.push(19);
  console.log(friends.indexOf('amin'));
  console.log(friends.includes(19)); //it returns boolean value

  if(friends.includes("rahid"))  //includes method is important
  {
    console.log("you have a friend called rahid");
  }