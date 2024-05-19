"use strict";
function calculateArea(input) {
    let area = 3.14 * input * input;
    return area;
}
let radius = 7;
let ans = calculateArea(radius);
console.log("Area of circle", ans);
