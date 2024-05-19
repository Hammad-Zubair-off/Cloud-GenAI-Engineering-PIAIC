function calculateArea(input:number):number{
    let area:number=3.14*input*input;
    return area;
}
let radius: number=7;
let ans:number=calculateArea(radius);
console.log("Area of circle", ans);
