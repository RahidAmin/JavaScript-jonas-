'use strict';

const student=['jamal','kamal','rohim'];

const myDetails={
    firstName:"Rahid",
    lastName:"Amin",
    myAge:1998-2024,
    jobTitle:"Teacher",
    students:student

}

console.log(myDetails.firstName);
console.log(myDetails.students);
console.log(myDetails);
console.log(myDetails['lastName']); //another way

const nameKey="Name";
console.log(myDetails['first'+nameKey]);