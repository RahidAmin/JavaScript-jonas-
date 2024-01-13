
const rahid={
    firstName:"Rahid",
    secondName:"Amin",
    birthYear: 1998,
    job:"Student",
    isDrivingLicence:true,

    // calAge: function(birthYear)
    // {
    //     return 2024-birthYear;
    // }
    calAge: function()
    {
       
        this.age=2024-this.birthYear;
        return this.age;
    },
    // calAge: function()
    // {
    //     console.log(this);   //this means rahid object
    //     return 2024-this.birthYear;
    // }

    getSummary:function()
    {
        return `${this.firstName} is a ${this.age}-years old ${this.job} and have ${this. isDrivingLicence?'a':'no'} driver licence`;     //This is most important
    }
}

// console.log(rahid.calAge(2000));
// console.log(rahid['calAge'](2001));
    console.log(rahid.calAge());
    console.log(rahid.age)

   console.log(rahid.getSummary());

 