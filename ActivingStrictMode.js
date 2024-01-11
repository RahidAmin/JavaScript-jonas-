  'use strict';

let hasDriversLicence=false;
const passTest=true;
let x=1;
if(passTest)
{
    hasDriversLicence=true;
    x=2;
}
else
{
    hasDriversLicence=false;
    x=5;
}

console.log(hasDriversLicence,x);

// const interface='audio';  strict mode does not accept this kind of future keywords
// const private=19;