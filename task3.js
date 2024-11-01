function vowels (str){
    const vowells = 'aeiouAEIOU';
    let count = 0;
    for (const char of str){
        if (vowells.includes(char)){
            count++
        }
    }
    return count;
}

const vowelss = 'I love you so much my dear love noor';
const result = vowels(vowelss);
console.log(result);