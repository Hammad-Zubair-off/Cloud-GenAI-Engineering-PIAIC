let fruits: string[]=["apple", "banana", "orange", "kiwi"];

if (fruits.length>=2) {
    let secondToLast: string = fruits[fruits.length - 2];
    console.log("Second to last element:", secondToLast);
} 
else{
    console.log("Array has less than two elements.");
}