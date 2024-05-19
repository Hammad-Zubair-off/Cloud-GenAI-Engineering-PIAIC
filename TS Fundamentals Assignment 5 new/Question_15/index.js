"use strict";
function countExceedAndFall(scores) {
    let maxScore = Math.max(...scores);
    let minScore = Math.min(...scores);
    let exceedCount = 0;
    let fallCount = 0;
    for (let score of scores) {
        if (score > maxScore)
            exceedCount++;
        if (score < minScore)
            fallCount++;
    }
    console.log("Exceeded max score count:", exceedCount);
    console.log("Fell below min score count:", fallCount);
}
let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
countExceedAndFall(scores);
