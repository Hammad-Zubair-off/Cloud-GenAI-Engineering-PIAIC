"use strict";
function findDuplicates(array) {
    const duplicates = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j] && !duplicates.includes(array[i])) {
                duplicates.push(array[i]);
            }
        }
    }
    console.log("Duplicates:", duplicates);
}
const array = [1, 2, 3, 4, 1, 5, 2, 6, 3];
findDuplicates(array);
