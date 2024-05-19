"use strict";
function calculateProduct(numbers) {
    // Initialize product to 1
    let product = 1;
    // Multiply each element in the array with the product
    for (const num of numbers) {
        product *= num;
    }
    // Return the final product
    return product;
}
// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(calculateProduct(numbers)); // Output: 120
