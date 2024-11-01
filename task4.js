function findLongestWord (str){
    const words = str.split(' ');
    let longestWord = '';
    for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}

const input = "I am learning Programming to become a programmer";
const result = findLongestWord(input);
console.log(result);