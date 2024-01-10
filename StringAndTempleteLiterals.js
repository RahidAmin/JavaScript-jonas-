
const firstName="Rahid";
const job="Student";
const birthDay=1998;
const year=2024;

const rahid="I'm "+firstName+' a '+(year-birthDay)+' years '+job;
console.log(rahid);

console.log(`Templete literals: 😎 I'm ${firstName} a ${year-birthDay} years ${job}`)

console.log("This \n\
is\n\
normal\n\
")
console.log(`this 
is 
liertals
`)

//if else

const ageSarah=15;
if(ageSarah>=18)
{
    console.log("She is old enough to get driving licence");
}
else{
    const yearsLeft=18-ageSarah;
    console.log(`She needs more ${yearsLeft} to get the driving licence`);
}

//type conversation

const inputYear='1998';
console.log(parseInt(1998)+18);
console.log(Number(inputYear),inputYear);
console.log(inputYear+18);

//falsy values

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(1));
console.log(Boolean(2));



//Equality operators == VS ===

const age=18;
if(age=='18')console.log("you have become an adult..");
if(age==='18')console.log("you have become an adult..(note:does not support coercion");

const favouriteNumber=Number(prompt("What is your favourite number: "));

if(favouriteNumber===5)console.log("My favourite number is: "+favouriteNumber);


//switch statement-------

const inputNumber=Number(prompt("Input a Decimal number 1 or 2: "));

switch(inputNumber)
{
    case 1:
        console.log("one");
        break;
        case 2:
            console.log("two");
            break;
            case 3:
                case 4:
                    console.log("three and four");
                    break;

            default:
                console.log("not in the list..")
            
}

//Conditional ternary operator

const userAge=17;

 userAge>=18?console.log("He is an adult"):
 console.log("He is not an adult");

 const gender="male";

const theGender=gender ==='male'?'this is male':'this is female';
console.log(theGender);

console.log(`Ternary operator: ${gender ==='male'?'this is male':'this is female'}`);///most important(this is not a statement but expression)