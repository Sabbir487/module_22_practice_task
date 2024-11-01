function includes (numbers){
    const num = [];
    for (const number of numbers){
        if (number.includes === 5){
            num.push(number);
        }
    }
    return num;
}

const numbers =  [5,6,11,12,98, 5];
const result = includes(numbers);
console.log(result);

// its wrong...