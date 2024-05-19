function countExceedAndFall(scores: number[]): void {
    let maxScore: number = Math.max(...scores);
    let minScore: number = Math.min(...scores);
    
    let exceedCount: number = 0;
    let fallCount: number = 0;
    
    for (let score of scores) {
        if (score > maxScore) exceedCount++;
        if (score < minScore) fallCount++;
    }
    
    console.log("Exceeded max score count:", exceedCount);
    console.log("Fell below min score count:", fallCount);
}
let scores: number[] = [10, 5, 20, 20, 4, 5, 2, 25, 1];
countExceedAndFall(scores);
