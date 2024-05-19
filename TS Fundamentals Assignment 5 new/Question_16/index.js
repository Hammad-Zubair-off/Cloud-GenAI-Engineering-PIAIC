"use strict";
function removeFalseyValues(array) {
    return array.filter(value => !!value);
}
let array = [false, null, 0, "", undefined, NaN, true, 42, "hello"];
let filteredArray = removeFalseyValues(array);
console.log("Original array:", array);
console.log("Array with falsey values removed:", filteredArray);
