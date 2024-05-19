function pos_num(input: number[]): number {
    let count: number = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            count = count + 1;
        }
    }
    return count;
}

let input: number[] = [43, 65, 75, 42, 12];
let answer: number = pos_num(input);
console.log("Positive numbers in the array:", answer);
