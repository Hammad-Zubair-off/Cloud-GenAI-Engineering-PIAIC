function sumOfElements(arr: number[], even: boolean): number {
    let sum = 0;
    for (const num of arr) {
        if (even && num % 2 === 0) {
            sum += num;
        } else if (!even && num % 2 !== 0) {
            sum += num;
        }
    }
    return sum;
}

// Example usage:
const myArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumOfElements(myArray, true));  // Output: 30 (sum of even elements)
console.log(sumOfElements(myArray, false)); // Output: 25 (sum of odd elements)
