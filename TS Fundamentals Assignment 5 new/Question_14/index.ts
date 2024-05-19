function reverseArray(array: number[]): number[] {
    let reversedArray: number[] = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

let originalArray: number[] = [1, 2, 3, 4, 5];
let reversedArray: number[] = reverseArray(originalArray);
console.log("Original array:", originalArray);
console.log("Reversed array:", reversedArray);
