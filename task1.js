function ferhenhight (celcius){
    const ferhenhight = (celcius * 9/5) + 32;
    return ferhenhight;
}

const tempreture = 25;
const ferhenhightTempreture = ferhenhight(tempreture);
console.log(`${tempreture}°C is equal to ${ferhenhightTempreture}°F`);