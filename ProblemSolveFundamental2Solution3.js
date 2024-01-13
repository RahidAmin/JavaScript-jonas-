'use strict';

const markMiller={
    fullName:"Mark Miller",
    mass:78,
    height:1.69,

    calcBMI: function()
    {
       return this.mass/(this.height*this.height);
    }

};

const johnSmith={
    fullName:"John Smith",
    mass:92,
    height:1.95,

    calcBMI: function()
    {
        return this.mass/(this.height*this.height);
    }

};

const heigherBMI=johnSmith.calcBMI()>markMiller.calcBMI()?`${johnSmith['fullName']} BMI(${johnSmith.calcBMI()}) is heigher than ${markMiller.fullName}(${markMiller.calcBMI()})`:`${markMiller.fullName} BMI(${markMiller.calcBMI()}) is heigher than ${johnSmith.fullName}(${johnSmith.calcBMI()})`;

console.log(heigherBMI);