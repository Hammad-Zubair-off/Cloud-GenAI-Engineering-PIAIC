"use strict";
function isSorted(array) {
    if (array.length <= 1) {
        return true;
    }
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            return false;
        }
    }
    return true;
}
const sortedArray = [1, 2, 3, 4, 5];
console.log(isSorted(sortedArray));
const unsortedArray = [1, 3, 2, 4, 5];
console.log(isSorted(unsortedArray));
