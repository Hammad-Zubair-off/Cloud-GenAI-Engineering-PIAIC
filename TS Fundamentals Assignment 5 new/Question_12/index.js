"use strict";
let fruits = ["apple", "banana", "orange", "kiwi"];
if (fruits.length >= 2) {
    let secondToLast = fruits[fruits.length - 2];
    console.log("Second to last element:", secondToLast);
}
else {
    console.log("Array has less than two elements.");
}
