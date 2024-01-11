'use strict';

const friends=['rahid','amin','siddique',19-4];
// console.log(friends[2]);
console.log(friends);
console.log(friends.length);
console.log(friends[friends.length-1]);

const years=new Array(1999,2000,2001,2002,"riven");
console.log(years);

//---Important---

const teacherName="Jonas";

const teacherAndStudent=[teacherName,friends,"riven"];
console.log(teacherAndStudent);



const calAge=function(birthYear)
{
    return 2024-birthYear;
}

const birthYear=[1990,1991,1992];
console.log(calAge(birthYear[1]));

const ages=[calAge(birthYear[0]),calAge(birthYear[1]),calAge(birthYear[birthYear.length-1])];
console.log(ages);