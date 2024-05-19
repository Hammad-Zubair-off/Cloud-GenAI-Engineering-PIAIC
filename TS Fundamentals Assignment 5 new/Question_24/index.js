"use strict";
function incrementAll(numbers) {
    const incrementedNumbers = [];
    for (const num of numbers) {
        incrementedNumbers.push(num + 1);
    }
    return incrementedNumbers;
}
const numbers = [1, 2, 3, 4, 5];
console.log(incrementAll(numbers));
