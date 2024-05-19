function findSmallestNumber(arr: number[]): number {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }

    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}
const myArray: number[] = [4, 2, 7, 1, 9, 3];
console.log(findSmallestNumber(myArray));  
