function wordsStartingWithA(words: string[]): string[] {
    let filteredWords: string[]=[];
    for(let word of words) {
        if(word.startsWith('a') || word.startsWith('A')) {
            filteredWords.push(word);
        }
    }
    return filteredWords;
}
let wordArray: string[]=["apple", "banana", "apricot", "orange", "kiwi"];
let resultArray: string[]=wordsStartingWithA(wordArray);
console.log("Words starting with 'a':", resultArray);