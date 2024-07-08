function calculateNetSalary() {
    let basicSalary = parseFloat(prompt("Enter Basic Salary:"));
    let benefits = parseFloat(prompt("Enter Benefits (if any):"));
    if (isNaN(basicSalary) || basicSalary <= 0) {
        return "Invalid Basic Salary input.";
    }

    if (isNaN(benefits)) {
        benefits = 0;
    }
    const nhifRate = 0.015; 
    const nssfRate = 0.06;  

    //NHIF deduction
    let nhifDeduction = basicSalary * nhifRate;

    // NSSF deduction
    let nssfDeduction = basicSalary * nssfRate;

    // Gross Salary
    let grossSalary = basicSalary + benefits;

    // paye (tax) calculation according to kra
    let paye = calculatePAYE(grossSalary);

    //Net Salary
    let netSalary = grossSalary - (paye + nhifDeduction + nssfDeduction);

    let result = `
        Basic Salary: ${basicSalary.toFixed(2)}
        Benefits: ${benefits.toFixed(2)}
        NHIF Deduction: ${nhifDeduction.toFixed(2)}
        NSSF Deduction: ${nssfDeduction.toFixed(2)}
        Gross Salary: ${grossSalary.toFixed(2)}
        PAYE (Tax): ${paye.toFixed(2)}
        Net Salary: ${netSalary.toFixed(2)}
    `;

    return result;
}

function calculatePAYE(grossSalary) {
    const brackets = [
        { min: 0, max: 24000, rate: 10 },
        { min: 24001, max: 32333, rate: 15 },
        { min: 32334, max: 40667, rate: 20 },
        { min: 40668, max: 49000, rate: 25 },
        { min: 49001, max: Infinity, rate: 30 }
    ];

    let paye = 0;
    for (let bracket of brackets) {
        if (grossSalary > bracket.max) {
            paye += (bracket.max - bracket.min) * (bracket.rate / 100);
        } else {
            paye += (grossSalary - bracket.min) * (bracket.rate / 100);
            break;
        }
    }

    return paye;
}

