function removeFalseyValues<T>(array: T[]): T[] {
    return array.filter(value => !!value);
}
let array: any[] = [false, null, 0, "", undefined, NaN, true, 42, "hello"];
let filteredArray: any[] = removeFalseyValues(array);
console.log("Original array:", array);
console.log("Array with falsey values removed:", filteredArray);
