'use strict'

function myName()
{
    console.log("my name is rahid");
}

myName();

function juiceMachine(orange,banana)
{
    
    const juice=`Juice with ${orange} oranges and ${banana} bananas`;
    return juice;
}

const myJuice=juiceMachine(2,3);

console.log(myJuice);

console.log(juiceMachine(4,5));

function calAge(birthYear)
{
    return 2024-birthYear;
}

const age1=calAge(1998);


//function expression
const calAge2=function(birthYear)
{
    return 2024-birthYear;
}

const age2=calAge2(2005);

console.log(age1,age2);

///Arrow function

const arrowFunctionCallAge=birthYear=>2024-birthYear;
 const age3=arrowFunctionCallAge(2032);
  console.log(age3);


  const yearsUntillRetirment=(birthYear,firstName)=>
  {
    const age=2024-birthYear;
    const retirement=65-age;
    // return retirement;
    return `${firstName} retires in ${retirement}`;
  }

//   console.log(`You have:${yearsUntillRetirment(1998)} years to retirement`);

  console.log(yearsUntillRetirment(1998,"Rahid"));
  console.log(yearsUntillRetirment(1999,"Mujibul"));


  //---------------Function calling other function

  const cutPices=function(fruit)
  {
    return 4*fruit;
  }

  const juiceProcessor=function(apple,orange)
  {
    const applePices=cutPices(apple);
    const orangePices=cutPices(orange);
    
    const juice =`you have ordered ${applePices} apple pices and ${orangePices} orange pices`;
    return juice;
  }

  const yourOrder=juiceProcessor(2,3);
  console.log(yourOrder);

  ///--------reviewing function

  function calculateAge(birthYear)
  {
    return 2024-birthYear;
  }


  const yearsUntillRetirement1=function(birthYear,firstName)
  {
    const age=calculateAge(birthYear);
    const retirement=65-age;
    if(retirement>0)
    {
      return `Name:${firstName} and retirement after ${retirement} years`;
    }
    else{
        return `Name:${firstName} and retirement after ${-1} years`;
    }
  }

  console.log(yearsUntillRetirement1(1950,"dulal"));