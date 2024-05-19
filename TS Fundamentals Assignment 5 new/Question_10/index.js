"use strict";
function pos_num(input) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            count = count + 1;
        }
    }
    return count;
}
let input = [43, 65, 75, 42, 12];
let answer = pos_num(input);
console.log("Positive numbers in the array:", answer);
