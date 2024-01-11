'use strict';

const calAverage=(score1,score2,score3)=>
{
    const average=(score1+score2+score3)/3;
    return average;
}

const avgDolhins=calAverage(85,54,41);
const avgKoalas=calAverage(23,34,27);
console.log(avgDolhins,avgKoalas);

const checkWinner=function(avgDolhins,avgKoalas)
{
    if(avgDolhins>=(2*avgKoalas))
    {
        console.log(`"Dolphins Win(${avgDolhins} vs. ${avgKoalas})"`);
    }
    else if(avgKoalas>=(2*avgDolhins))
    {
        console.log(`"Kolas Win(${avgKoalas} vs. ${avgDolhins})"`);
    }
}

checkWinner(avgDolhins,avgKoalas);