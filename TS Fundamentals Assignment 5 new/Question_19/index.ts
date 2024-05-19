function findElementIndex(arr: any[], element: any): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}
const myArray: number[] = [1, 2, 3, 4, 5];
console.log(findElementIndex(myArray, 3));  
console.log(findElementIndex(myArray, 6));  
