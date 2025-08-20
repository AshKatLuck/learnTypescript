"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateInvestment(data) {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;
    if (initialAmount < 0) {
        return "initial investment must be >0";
    }
    if (duration <= 0) {
        return "No valid amount of years provided";
    }
    if (expectedReturn < 0) {
        return "expected returns must be positive";
    }
    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    let annualResults = [];
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;
        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions,
        });
    }
    return annualResults;
} // returns results[]
function printResults(results) {
    if (typeof results == "string") {
        console.log(results);
        return;
    }
    for (const yearEndResult of results) {
        console.log(yearEndResult);
        console.log(`Total Contributions:${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total interest earned:${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log(`Total Contributions:${yearEndResult.totalContributions.toFixed(0)}`);
        console.log("...........................................");
    }
}
const investmentData = {
    initialAmount: 1000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 5,
};
const results = calculateInvestment(investmentData);
printResults(results);
//# sourceMappingURL=calculator.js.map