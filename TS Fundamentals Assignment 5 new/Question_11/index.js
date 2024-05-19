"use strict";
function wordsStartingWithA(words) {
    let filteredWords = [];
    for (let word of words) {
        if (word.startsWith('a') || word.startsWith('A')) {
            filteredWords.push(word);
        }
    }
    return filteredWords;
}
let wordArray = ["apple", "banana", "apricot", "orange", "kiwi"];
let resultArray = wordsStartingWithA(wordArray);
console.log("Words starting with 'a':", resultArray);
