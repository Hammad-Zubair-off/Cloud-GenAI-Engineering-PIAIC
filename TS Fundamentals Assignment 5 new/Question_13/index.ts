function squareArray(numbers: number[]): number[] {
    let squaredArray: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        let squaredNum = num * num;
        squaredArray.push(squaredNum);
    }
    return squaredArray;
}

let numbers: number[] = [1, 2, 3, 4, 5];
let squaredNumbers: number[] = squareArray(numbers);
console.log("Original array:", numbers);
console.log("Array with each number squared:", squaredNumbers);
