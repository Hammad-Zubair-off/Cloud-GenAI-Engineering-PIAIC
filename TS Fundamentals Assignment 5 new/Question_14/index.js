"use strict";
function reverseArray(array) {
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}
let originalArray = [1, 2, 3, 4, 5];
let reversedArray = reverseArray(originalArray);
console.log("Original array:", originalArray);
console.log("Reversed array:", reversedArray);
