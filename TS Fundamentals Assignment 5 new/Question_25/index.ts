function countOccurrences(array: any[], target: any): number {
    let count = 0;

    for (const element of array) {
        if (element === target) {
            count++;
        }
    }

    return count;
}
const numbers = [1, 2, 2, 3, 2, 4, 5, 2];
const target = 2;
console.log(countOccurrences(numbers, target)); 