function formatNames(names: string[]): string {
    if (names.length === 0) {
        return '';
    } else if (names.length === 1) {
        return names[0];
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]}`;
    } else {
        const formattedNames = names.slice(0, -2).join(', ') + ', ' + names.slice(-2).join(' and ');
        return formattedNames;
    }
}
const names1 = ['Alice', 'Bob', 'Charlie', 'Dave'];
console.log(formatNames(names1)); 

const names2 = ['Alice', 'Bob', 'Charlie'];
console.log(formatNames(names2)); 
const names3 = ['Alice'];
console.log(formatNames(names3)); 

const names4: string[] = [];
console.log(formatNames(names4));