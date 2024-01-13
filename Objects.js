'use strict';

const student=['jamal','kamal','rohim'];

const myDetails={
    firstName:"Rahid",
    lastName:"Amin",
    myAge:2024-1998,
    jobTitle:"Teacher",
    students:student

}

console.log(myDetails.firstName);
console.log(myDetails.students);
console.log(myDetails);
console.log(myDetails['lastName']); //another way

const nameKey="Name";
console.log(myDetails['first'+nameKey]); //important



const interestedIn=prompt('What do you want to know about rahid?Choose between firstName,lastName,jobTitle,students');

//   console.log(myDetails[interestedIn]);

if(myDetails[interestedIn])   //important
 {
    console.log(myDetails[interestedIn]);
 }
 else{
    console.log("Wrong request");
 }

 //adding in object

 myDetails.location="Dhaka";
 myDetails['facebook']="RahidAmin";    //important

 console.log(myDetails);

 console.log(`${myDetails.firstName} has ${myDetails.students.length} students,and his best student is called ${myDetails.students[0]}`);