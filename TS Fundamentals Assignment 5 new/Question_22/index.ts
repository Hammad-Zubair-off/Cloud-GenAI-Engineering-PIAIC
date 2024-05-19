function filterByLength(strings: string[], n: number): string[] {
    const filteredStrings: string[] = [];

    for (const str of strings) {
        if (str.length > n) {
            filteredStrings.push(str);
        }
    }

    return filteredStrings;
}

// Example usage:
const strings = ["apple", "banana", "orange", "kiwi", "pineapple"];
const n = 5;
console.log(filterByLength(strings, n)); // Output: ["banana", "orange", "pineapple"]
