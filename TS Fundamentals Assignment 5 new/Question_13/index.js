"use strict";
function squareArray(numbers) {
    let squaredArray = [];
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        let squaredNum = num * num;
        squaredArray.push(squaredNum);
    }
    return squaredArray;
}
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = squareArray(numbers);
console.log("Original array:", numbers);
console.log("Array with each number squared:", squaredNumbers);
